const translations = {
    en: {

        header_map :        "MAP",
        header_charachter : "CHARACHTER",
        header_inventory :  "INVENTROY",
        // Main
        main_name :         "Khodyrev Kirill",
        main_bio  :         "Game developer and computer graphics enthusiast",
        main_achievements : "Achievements",

        // MAP
        map_tooltip :     "Explore the portfolio of projects by clicking on dots on the map",
        map_implemented : "Implemented:",
        map_play :        "[play]",
        
        map_delivery_description :          "Single-player 3D top-down game about cargo delivery and combat in space",
        map_delivery_role :                 "Role in the team: developer",
        map_delivery_questSystem :          "Quest system",
        map_delivery_saveSystem :           "Save system",
        map_delivery_customSerilazation :   "Custom serialzation",
        map_delivery_mapSystem :            "Scalable world map with dynamic labels (UI based)",
        map_delivery_enemiesAI :            "Physics-based enemy movement with a dynamic navigation mesh",
        map_delivery_cargoTransportation :  "Cargo transportation",
        map_delivery_dialogueSystem :       "Dialogue system with RichText support",
        
        map_bioMatter_description : "Story-oriented single-player game for WEB, adapted for mobile devices and PC. Arena shooter with roguelike elements",
        map_bioMatter_levels :      "3 levels",
        map_bioMatter_enemies :     "4 enemies",
        map_bioMatter_weapons:      "3 weapons",
        map_bioMatter_consumables:  "2 consumables",
        map_bioMatter_boss:         "Final boss",

        map_constructor_description :   "AR constructor for mobile devices",
        map_constructor_1 :             "Setting blocks on a grid",
        map_constructor_2 :             "Block size selection",
        map_constructor_3 :             "128 colors",

        map_batyr_description : "Story-driven 2D action-platformer in the setting of Bashkir myths",
        map_batyr_role :        "Role in the team: \"technical director\", developer",

        map_calculator_description : "The simplest calculator for Android devices that supports sequence of operations",

        //INVENTORY
        inventory_header : "Some tools I used",
    },
    ru: {

        header_map :        "КАРТА",
        header_charachter : "ПЕРСОНАЖ",
        header_inventory :  "ИНВЕНТАРЬ",

        // Main
        main_name :         "Ходырев Кирилл",
        main_bio  :         "Разработчик игр и любитель компьютерной графики",
        ain_achievements :  "Достижения",

        // MAP
        map_tooltip :       "Исследуйте портфолио проектов, нажимая точки на карте",
        map_implemented :   "Реализовано:",
        map_play :          "[играть]",

        map_delivery_description :           "Однопользовательская 3D игра с видом сверху, о доставке грузов и боях в космосе",
        map_delivery_role :                  "Роль в команде: разработчик",
        map_delivery_questSystem :           "Система квестов",
        map_delivery_saveSystem :            "Система сохранений",
        map_delivery_customSerilazation :    "Пользовательские сцернарии сериализации",
        map_delivery_mapSystem :             "Масштабируемая карта мира с динамическими метками (UI based)",
        map_delivery_enemiesAI :             "Передвижение противников, основанное на физике, с помощью динамической навигационной сетки",
        map_delivery_cargoTransportation :   "Перевозка грузов",
        map_delivery_dialogueSystem :        "Дилоговая система с поддержкой RichText",

        map_bioMatter_description : "Сюжетноориентированная однопользовательская игра для WEB, адаптированная под мобильные утройства и ПК. Арена шутер с элементами рогалика",
        map_bioMatter_levels :      "3 уровня",
        map_bioMatter_enemies :     "4 вида противников",
        map_bioMatter_weapons:      "3 вида оружия",
        map_bioMatter_consumables:  "2 расходника",
        map_bioMatter_boss:         "Финальный босс",

        map_constructor_description :   "AR конструктор для мобильных устройств",
        map_constructor_1 :             "Постановка блоков по сетке",
        map_constructor_2 :             "Выбор размера блока",
        map_constructor_3 :             "Выбор из 128 цветов",

        map_batyr_description : "Сюжетноориентированный 2D action-platformer в сеттинге башкирских мифов",
        map_batyr_role :        "Роль в команде: \"технический директор\", разработчик",

        map_calculator_description : "Простейший калькулятор для Android устройств, поддерживающий последовательность операций",

        // INVENTORY
        inventory_header : "Некоторые инструменты, которые я использовал",
    }

};

function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.placeholder) {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    document.documentElement.lang = lang;
    updateNavLanguage(lang);
}

function updateNavLanguage(lang) {
    const navLinks = document.querySelectorAll('nav a[data-i18n]');
    navLinks.forEach(link => {
        const key = link.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            link.textContent = translations[lang][key];
        }
    });
}

function initializeLanguage() {
    const preferredLanguage = detectBrowserLanguage() || 'en';
    setLanguage(preferredLanguage);
}

function detectBrowserLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.split('-')[0];
}

document.addEventListener('DOMContentLoaded', initializeLanguage);