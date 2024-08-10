import express from "express";

export function initApp(port: number) {
    const app = express();
    //здесь мы будем инициализировать сами модули.
    //Каждый модуль - это одна функция: Функция запуска.
    //ВАЖНО: Модули не должны взаимодействовать друг с другом.
    //Хочется создать "общую функцию" - вынесите её в тот файл, который не собираетесь
    // инициализировать ЗДЕСЬ.
}
