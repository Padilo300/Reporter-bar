var gulp       = require('gulp'), // Подключаем Gulp
	sass         = require('gulp-sass'), //Подключаем Sass пакет,
	browserSync  = require('browser-sync'), // Подключаем Browser Sync
	concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('sass', function(){ // Создаем таск Sass
	return gulp.src('reporter/sass/**/*.sass') // Берем источник
		.pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('reporter/css')) // Выгружаем результата в папку reporter/css
		.pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'reporter' // Директория для сервера - reporter
		},
		notify: false // Отключаем уведомления
	});
});

gulp.task('scripts', function() {
	// Берем все необходимые библиотеки
	return gulp.src([
					'reporter/js/jquery-3.2.1.min.js'		,
					'reporter/js/anime.min.js'				,
					'reporter/js/imagesloaded.pkgd.min.js'	,
					'reporter/js/main.js'					,
					'reporter/js/bootstrap.min.js'			,
					'reporter/js/R_rest.js'					,
					'reporter/js/R_pab.js'					,
					'reporter/js/calendar_ARTIST.js'		,
					'reporter/js/calendar_COAST.js'			,
					'reporter/js/userSripts.js'				,
					'reporter/js/calendar.js'				,
					'reporter/js/jquery.validate.min.js'	, 
					]) // Берем все файлы
		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('reporter/js')); // Выгружаем в папку reporter/js
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('reporter/css/all.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('reporter/css')); // Выгружаем в папку reporter/css
});
 
gulp.task('css-concat', function() {
  return gulp.src([
  				  'reporter/css/button.css'				,
  				  'reporter/css/login.css'				,
  				  'reporter/css/normalize.css'			,
  				  'reporter/css/demo.css'				,
  				  'reporter/css/component.css'			,
  				  'reporter/css/csshake.min.css'		,
  				  'reporter/css/font-awesome.min.css'	,
  				  'reporter/css/cart_user.css'			,
  				  'reporter/css/addUser.css'			,
  				  'reporter/css/animate.css'			,
  				  'reporter/css/bootstrap.css'			,
  				  'reporter/css/table.css'				,
  				  'reporter/css/page-admin.css'			,
  				  'reporter/css/buttonVictoria.css'		,
  				  'reporter/css/login.css'				,
  				  'reporter/css/style.css'				,
  				  'reporter/css/libs.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('reporter/css/'));
});

gulp.task('watch', ['browser-sync','css-concat', 'css-libs', 'scripts'], function() {
	gulp.watch('reporter/sass/**/*.sass', ['sass','css-concat', 'css-libs']); // Наблюдение за sass файлами в папке sass
	gulp.watch('reporter/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
	gulp.watch('reporter/js/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('clean', function() {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function() {
	return gulp.src('reporter/img/**/*') // Берем все изображения из reporter
		.pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('build', ['clean', 'img', 'sass', 'scripts'], function() {

	var buildCss = gulp.src([ // Переносим библиотеки в продакшен
		'reporter/css/main.css',
		'reporter/css/libs.min.css'
		])
	.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('reporter/fonts/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('reporter/js/**/*') // Переносим скрипты в продакшен
	.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('reporter/*.html') // Переносим HTML в продакшен
	.pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
})

gulp.task('default', ['watch']);