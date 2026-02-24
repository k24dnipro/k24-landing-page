# K24 Кузовний Центр - Офіційний сайт

Сучасний веб-сайт для автосервісу K24 Кузовний Центр у місті Дніпро. Сайт створений на базі Next.js 15 з використанням React 19 та TypeScript.

## 🚀 Основні можливості

- **Сучасний дизайн** - адаптивний інтерфейс для всіх пристроїв
- **Швидка робота** - оптимізація продуктивності завдяки Next.js
- **SEO оптимізація** - автоматична генерація sitemap та robots.txt
- **Форма зворотного зв'язку** - інтеграція з Telegram для миттєвих сповіщень
- **Галерея робіт** - порівняння "до/після" з інтерактивними слайдерами
- **Відгуки клієнтів** - відображення рейтингів та відгуків
- **Google Maps** - інтерактивна карта з розташуванням сервісу
- **Google Reviews** - інтеграція з Google відгуками

## 📋 Структура проєкту

```
k24/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API маршрути (Telegram)
│   │   ├── layout.tsx         # Основний layout
│   │   ├── page.tsx           # Головна сторінка
│   │   ├── sitemap.ts         # Генерація sitemap
│   │   ├── robots.ts          # Robots.txt
│   │   └── manifest.ts        # PWA manifest
│   ├── components/            # React компоненти
│   │   ├── Header/           # Навігаційне меню
│   │   ├── Hero/             # Головний банер
│   │   ├── About/            # Про компанію
│   │   ├── Services/         # Послуги
│   │   ├── Gallery/          # Галерея робіт
│   │   ├── Reviews/          # Відгуки клієнтів
│   │   ├── Contact/          # Контактна форма
│   │   ├── Footer/           # Підвал сайту
│   │   ├── Button/           # Кнопка
│   │   └── Section/          # Секція контейнер
│   ├── styles/               # Глобальні стилі
│   ├── types/                # TypeScript типи
│   └── utils/                # Допоміжні функції
├── public/                    # Статичні файли
│   ├── images/               # Зображення
│   └── gallery/              # Галерея "до/після"
└── package.json              # Залежності проєкту
```

## 🛠 Технології

- **Next.js 15.5.6** - React фреймворк з App Router
- **React 19.1.0** - UI бібліотека
- **TypeScript 5** - типізація коду
- **SCSS** - стилізація компонентів
- **React Hook Form** - управління формами
- **Lucide React** - іконки
- **React Compare Slider** - слайдери порівняння

## 📦 Встановлення та запуск

### Передумови

- Node.js 18+ або новіша версія
- npm, yarn, pnpm або bun

### Крок 1: Встановлення залежностей

```bash
npm install
# або
yarn install
# або
pnpm install
```

### Крок 2: Налаштування змінних оточення

Створіть файл `.env.local` в корені проєкту:

```env
# Telegram Bot Token (отримайте у @BotFather)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token

# Telegram Chat ID (ID групи для отримання заявок)
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id
```

**Як отримати Telegram Chat ID:**
1. Створіть бота через [@BotFather](https://t.me/BotFather)
2. Додайте бота до групи
3. Відправте повідомлення в групу
4. Відкрийте: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
5. Знайдіть `chat.id` в відповіді

### Крок 3: Запуск сервера розробки

```bash
npm run dev
# або
yarn dev
# або
pnpm dev
# або
bun dev
```

Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

## 🏗 Збірка для продакшену

### Створення production build

```bash
npm run build
# або
yarn build
# або
pnpm build
```

### Запуск production сервера

```bash
npm start
# або
yarn start
# або
pnpm start
```

## 📝 Доступні скрипти

- `npm run dev` - запуск сервера розробки з Turbopack
- `npm run build` - створення production build
- `npm start` - запуск production сервера
- `npm run lint` - перевірка коду ESLint

## 🔧 Налаштування

### Контактна інформація

Оновіть контактні дані в файлі `src/components/Contact/Contact.tsx`:

```typescript
const contactInfo: ContactInfo = {
  phone: "+38 (098) 777-44-01",
  phones: ["+38 (098) 777-44-01", "+38 (097) 959-05-05"],
  email: "info@k24dnipro.com",
  address: "52005, Слобожанське, вул. Василя Сухомлинського 80А",
  workingHours: {
    weekdays: "Пн-Пт: 08:00 - 20:00",
    weekend: "Сб-Нд: 09:00 - 18:00",
  },
};
```

### Послуги

Оновіть список послуг у файлі `src/components/Services/Services.tsx`.

### Відгуки

Оновіть відгуки клієнтів у файлі `src/components/Reviews/Reviews.tsx`.

### Галерея

Додайте зображення до папки `public/gallery/` та оновіть дані в `src/components/Gallery/Gallery.tsx`.

### Google Maps

Оновіть посилання на карту в `src/components/Contact/Contact.tsx` (iframe src).

### Google Reviews

Оновіть посилання на Google відгуки в `src/components/Reviews/Reviews.tsx`.

## 🌐 Деплой

### Vercel (рекомендовано)

1. Підключіть репозиторій до [Vercel](https://vercel.com)
2. Додайте змінні оточення в налаштуваннях проєкту
3. Деплой відбудеться автоматично

### Інші платформи

Сайт можна задеплоїти на будь-яку платформу, що підтримує Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 PWA та SEO

Проєкт включає:
- ✅ Автоматичну генерацію `sitemap.xml`
- ✅ Налаштування `robots.txt`
- ✅ PWA manifest для встановлення як додаток
- ✅ Open Graph метатеги для соціальних мереж
- ✅ Favicon та іконки для різних пристроїв

## 🔒 Безпека

- Змінні оточення не комітяться в репозиторій
- Валідація форм на клієнті та сервері
- Захист від XSS через Next.js

## 📞 Підтримка

Для питань та підтримки звертайтесь до розробника або перевірте документацію Next.js:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)

## 📄 Ліцензія

Цей проєкт є приватним та належить K24 Кузовний Центр.
Контакти розробки: Katerenchuk Olekrandr;
+380634852179 |
oleksandrkaterenchuk12@gmail.com

---

**Версія:** 0.1.0  
**Останнє оновлення:** 2025
