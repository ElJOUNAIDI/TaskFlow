FROM php:8.3-cli

# Installer dépendances système et extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    unzip \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    libzip-dev \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Installer Composer globalement
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Définir le répertoire de travail
WORKDIR /var/www

# Copier le code Laravel dans le conteneur (optionnel si volume Docker utilisé)
# COPY . .

# Exposer le port pour php artisan serve
EXPOSE 8000

# Démarrage par défaut
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
