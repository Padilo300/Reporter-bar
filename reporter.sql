-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Фев 19 2018 г., 13:15
-- Версия сервера: 10.1.26-MariaDB-0+deb9u1
-- Версия PHP: 7.0.27-0+deb9u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `reporter`
--

-- --------------------------------------------------------

--
-- Структура таблицы `february`
--

CREATE TABLE `february` (
  `id` int(11) NOT NULL,
  `bar` varchar(50) NOT NULL,
  `userNumber` int(2) NOT NULL,
  `year` int(4) NOT NULL,
  `day1` varchar(10) NOT NULL DEFAULT 'false',
  `day2` varchar(10) NOT NULL DEFAULT 'false',
  `day3` varchar(10) NOT NULL DEFAULT 'false',
  `day4` varchar(10) NOT NULL DEFAULT 'false',
  `day5` varchar(10) NOT NULL DEFAULT 'false',
  `day6` varchar(10) NOT NULL DEFAULT 'false',
  `day7` varchar(10) NOT NULL DEFAULT 'false',
  `day8` varchar(10) NOT NULL DEFAULT 'false',
  `day9` varchar(10) NOT NULL DEFAULT 'false',
  `day10` varchar(10) NOT NULL DEFAULT 'false',
  `day11` varchar(10) NOT NULL DEFAULT 'false',
  `day12` varchar(10) NOT NULL DEFAULT 'false',
  `day13` varchar(10) NOT NULL DEFAULT 'false',
  `day14` varchar(10) NOT NULL DEFAULT 'false',
  `day15` varchar(10) NOT NULL DEFAULT 'false',
  `day16` varchar(10) NOT NULL DEFAULT 'false',
  `day17` varchar(10) NOT NULL DEFAULT 'false',
  `day18` varchar(10) NOT NULL DEFAULT 'false',
  `day19` varchar(10) NOT NULL DEFAULT 'false',
  `day20` varchar(10) NOT NULL DEFAULT 'false',
  `day21` varchar(10) NOT NULL DEFAULT 'false',
  `day22` varchar(10) NOT NULL DEFAULT 'false',
  `day23` varchar(10) NOT NULL DEFAULT 'false',
  `day24` varchar(10) NOT NULL DEFAULT 'false',
  `day25` varchar(10) NOT NULL DEFAULT 'false',
  `day26` varchar(10) NOT NULL DEFAULT 'false',
  `day27` varchar(10) NOT NULL DEFAULT 'false',
  `day28` varchar(10) NOT NULL DEFAULT 'false',
  `day29` varchar(10) NOT NULL DEFAULT 'false',
  `day30` varchar(10) NOT NULL DEFAULT 'false',
  `day31` varchar(10) NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `february`
--

INSERT INTO `february` (`id`, `bar`, `userNumber`, `year`, `day1`, `day2`, `day3`, `day4`, `day5`, `day6`, `day7`, `day8`, `day9`, `day10`, `day11`, `day12`, `day13`, `day14`, `day15`, `day16`, `day17`, `day18`, `day19`, `day20`, `day21`, `day22`, `day23`, `day24`, `day25`, `day26`, `day27`, `day28`, `day29`, `day30`, `day31`) VALUES
(1, 'rep-cafe', 1, 2018, 'false', 'false', 'true', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'),
(2, 'rep-cafe', 2, 2018, 'false', 'false', 'true', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'),
(3, 'rep-cafe', 3, 2018, 'false', 'false', 'true', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'),
(4, 'rep-cafe', 4, 2018, 'false', 'false', 'true', 'true', 'false', 'false', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false');

-- --------------------------------------------------------

--
-- Структура таблицы `january`
--

CREATE TABLE `january` (
  `id` int(11) NOT NULL,
  `bar` varchar(50) NOT NULL,
  `userNumber` int(2) NOT NULL,
  `year` int(4) NOT NULL,
  `day1` varchar(10) NOT NULL DEFAULT 'false',
  `day2` varchar(10) NOT NULL DEFAULT 'false',
  `day3` varchar(10) NOT NULL DEFAULT 'false',
  `day4` varchar(10) NOT NULL DEFAULT 'false',
  `day5` varchar(10) NOT NULL DEFAULT 'false',
  `day6` varchar(10) NOT NULL DEFAULT 'false',
  `day7` varchar(10) NOT NULL DEFAULT 'false',
  `day8` varchar(10) NOT NULL DEFAULT 'false',
  `day9` varchar(10) NOT NULL DEFAULT 'false',
  `day10` varchar(10) NOT NULL DEFAULT 'false',
  `day11` varchar(10) NOT NULL DEFAULT 'false',
  `day12` varchar(10) NOT NULL DEFAULT 'false',
  `day13` varchar(10) NOT NULL DEFAULT 'false',
  `day14` varchar(10) NOT NULL DEFAULT 'false',
  `day15` varchar(10) NOT NULL DEFAULT 'false',
  `day16` varchar(10) NOT NULL DEFAULT 'false',
  `day17` varchar(10) NOT NULL DEFAULT 'false',
  `day18` varchar(10) NOT NULL DEFAULT 'false',
  `day19` varchar(10) NOT NULL DEFAULT 'false',
  `day20` varchar(10) NOT NULL DEFAULT 'false',
  `day21` varchar(10) NOT NULL DEFAULT 'false',
  `day22` varchar(10) NOT NULL DEFAULT 'false',
  `day23` varchar(10) NOT NULL DEFAULT 'false',
  `day24` varchar(10) NOT NULL DEFAULT 'false',
  `day25` varchar(10) NOT NULL DEFAULT 'false',
  `day26` varchar(10) NOT NULL DEFAULT 'false',
  `day27` varchar(10) NOT NULL DEFAULT 'false',
  `day28` varchar(10) NOT NULL DEFAULT 'false',
  `day29` varchar(10) NOT NULL DEFAULT 'false',
  `day30` varchar(10) NOT NULL DEFAULT 'false',
  `day31` varchar(10) NOT NULL DEFAULT 'false'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `january`
--

INSERT INTO `january` (`id`, `bar`, `userNumber`, `year`, `day1`, `day2`, `day3`, `day4`, `day5`, `day6`, `day7`, `day8`, `day9`, `day10`, `day11`, `day12`, `day13`, `day14`, `day15`, `day16`, `day17`, `day18`, `day19`, `day20`, `day21`, `day22`, `day23`, `day24`, `day25`, `day26`, `day27`, `day28`, `day29`, `day30`, `day31`) VALUES
(1, 'rep-cafe', 1, 2018, 'true', 'false', 'false', 'true', 'true', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'),
(2, 'rep-cafe', 2, 2018, 'false', 'false', 'true', 'true', 'true', 'true', 'false', 'true', 'false', 'true', 'false', 'true', 'false', 'false', 'false', 'true', 'false', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'),
(3, 'rep-cafe', 3, 2018, 'false', 'false', 'false', 'false', 'true', 'true', 'true', 'true', 'false', 'false', 'true', 'true', 'false', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'),
(4, 'rep-cafe', 4, 2018, 'false', 'false', 'true', 'true', 'true', 'false', 'true', 'true', 'true', 'true', 'true', 'false', 'false', 'false', 'false', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'),
(5, 'pab', 1, 2018, 'false', 'false', 'false', 'true', 'true', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'),
(6, 'pab', 2, 2018, 'false', 'false', 'false', 'false', 'true', 'true', 'false', 'true', 'false', 'true', 'false', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'),
(7, 'pab', 3, 2018, 'false', 'false', 'false', 'false', 'false', 'false', 'true', 'true', 'false', 'false', 'true', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'),
(8, 'pab', 4, 2018, 'false', 'false', 'true', 'true', 'true', 'false', 'false', 'false', 'true', 'true', 'true', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false'),
(9, 'pab', 5, 2018, 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false', 'false');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL DEFAULT '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW',
  `email` varchar(50) NOT NULL,
  `day` int(2) NOT NULL,
  `mouth` int(2) NOT NULL,
  `year` int(4) NOT NULL,
  `mobileNumber` int(11) NOT NULL,
  `mobileNumber2` int(15) NOT NULL,
  `contact_name` varchar(50) NOT NULL,
  `img_src` varchar(100) NOT NULL DEFAULT 'user-defoult.jpg',
  `address_passport` varchar(100) NOT NULL,
  `actual_address` varchar(100) NOT NULL,
  `place_of_work` varchar(20) NOT NULL,
  `bar_of_work_in_reporter` varchar(30) DEFAULT NULL,
  `cafe_schedule` varchar(30) DEFAULT NULL,
  `pab_schedule` varchar(30) DEFAULT NULL,
  `rest_schedule` varchar(30) DEFAULT NULL,
  `artist_schedule` varchar(30) DEFAULT NULL,
  `money` int(10) NOT NULL DEFAULT '7000',
  `admin` varchar(30) NOT NULL DEFAULT 'false',
  `fecebook` varchar(200) NOT NULL,
  `vkontakte` varchar(200) NOT NULL,
  `skype` varchar(200) NOT NULL,
  `twitter` varchar(200) NOT NULL,
  `pinterest` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `password`, `email`, `day`, `mouth`, `year`, `mobileNumber`, `mobileNumber2`, `contact_name`, `img_src`, `address_passport`, `actual_address`, `place_of_work`, `bar_of_work_in_reporter`, `cafe_schedule`, `pab_schedule`, `rest_schedule`, `artist_schedule`, `money`, `admin`, `fecebook`, `vkontakte`, `skype`, `twitter`, `pinterest`) VALUES
(9, 'Константин', 'Падило', '$2y$10$pdafhTS94UL5jk0DeEv/UOK62UngFTYQZL9KVTBWzcyN9/gYdWcB6', 'padilo300@gmail.com', 6, 11, 1994, 998877333, 23123123, 'жена', '1518009513.jpg', 'пр.Победы 12', 'ул.Длинная 13', 'репортер', 'кофейня', 'кондитер1', '', '', '', 7000, 'true', 'fasebook', 'vkotakte', 'skype', 'twitter', 'Pinterst'),
(10, 'Тихан', 'Бобров', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'padilo300@gmail.com', 0, 1, 0, 998877333, 23123123, 'мать', 'user-defoult.jpg', '', '', 'репортер', 'кофейня', 'бармен1', '', '', '', 7000, 'false', 'строка', '', '', '', ''),
(13, 'Александр', 'Даценко', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'padilo300@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'репортер', 'кофейня', 'бармен2', '', '', '', 7000, 'false', 'false', '', '', '', ''),
(14, 'Александр', 'Коваленко', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'padilo300@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'репортер', 'кофейня', 'кондитер2', '', '', '', 7000, 'false', '', '', '', '', ''),
(15, 'Алена', 'Ковальчук', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'padilo300@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'репортер', 'паб', '', 'бармен1', '', '', 7000, 'false', '', '', '', '', ''),
(16, 'Дмитрий', 'Червонящий', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'padilo300@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'репортер', 'паб', '', 'бармен2', '', '', 7000, 'false', '', '', '', '', ''),
(17, 'Роман', 'Билецкий', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'padilo300@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'репортер', 'паб', '', 'бармен3', '', '', 7000, 'false', '', '', '', '', ''),
(18, 'Рустам', 'Мороз', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'padilo300@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'репортер', 'паб', '', 'бармен4', '', '', 7000, 'false', '', '', '', '', ''),
(19, 'Анатолий', 'Дыхтенко', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'padilo300@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'репортер', 'паб', '', 'бармен5', '', '', 7000, 'false', '', '', '', '', ''),
(20, 'Станислав', 'Дьяченко', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'padilo300@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'репортер', 'ресторан', '', '', 'бармен2', '', 7000, 'false', '', '', '', '', ''),
(21, 'Роман', 'Попов', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'padilo300@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'репортер', 'ресторан', '', '', 'бармен1', '', 7000, 'false', '', '', '', '', ''),
(22, 'Евгений', 'Гаркуша', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'mail@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'артист', '', '', '', '', 'бармен1', 7000, 'false', '', '', '', '', ''),
(23, 'Карина', 'Глухова', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'mail@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'артист', '', '', '', '', 'бармен2', 7000, 'false', '', '', '', '', ''),
(24, 'Виктор', 'Жигаревич', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'mail@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'артист', '', '', '', '', 'бармен3', 7000, 'false', '', '', '', '', ''),
(25, 'Ольга', 'Ладо', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'mail@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'артист', '', '', '', '', 'бармен4', 7000, 'false', '', '', '', '', ''),
(26, 'Никита', 'Пипериди', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'mail@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'артист', '', '', '', '', 'бармен5', 7000, 'false', '', '', '', '', ''),
(27, 'Андрей', 'Рыбалка', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'mail@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'артист', '', '', '', '', 'бармен6', 7000, 'false', '', '', '', '', ''),
(28, 'тест ', 'зарплаты', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'mail@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', 'артист', '', '', '', '', '', 10000, 'false', '', '', '', '', ''),
(31, 'Администратор', 'Срашный', '$2y$10$AdxFqALsDj46SINjbW2ZL.E9XztiBl9xZq3jWLmclm774WnJce.lW', 'padilo300@gmail.com', 0, 1, 0, 0, 0, '', 'user-defoult.jpg', '', '', '', '', '', '', '', '', 9999, 'true', '', '', '', '', ''),
(32, 'тест', 'тест', '$2y$10$18SOocY1GzBUFfBDg9S/Qeoq0DuU8yHF2CHMEX692WSoCTNOkR0gO', 'padilo@gmail.com', 0, 1, 0, 0, 0, '', '1518007795.jpg', '', '', '', '', '', '', '', '', 0, 'false', '', '', '', '', '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `february`
--
ALTER TABLE `february`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `january`
--
ALTER TABLE `january`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `february`
--
ALTER TABLE `february`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT для таблицы `january`
--
ALTER TABLE `january`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
