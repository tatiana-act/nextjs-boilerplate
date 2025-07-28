import { Tour } from '@/types/tour';

export const tours: Tour[] = [
    {
        id: 'Acap',
        title: 'Пешеходная экскурсия по историческому центру Остина',
        description: 'Прогуляемся по знаменитой Congress Avenue — главной улице города, где сохранился дух старого Остина. Заглянем в легендарный отель Driskill — настоящий архитектурный шедевр с привидениями и удивительной историей.',
        duration: '1.5 часа',
        price: 0,
        imageUrl: 'https://images.unsplash.com/photo-1666972120465-efebce20bf93?q=80&w=800&h=600&auto=format&fit=crop',
        highlights: [
            'Увидим, услышим, почувствуем Остин таким, каким его знали сто лет назад.',
            'Не забудьте зарядить телефоны — будет что фотографировать!',
            'После экскурсии желающие смогут выпить кофе и почувствовать атмосферу XIX века в красивом старинном кафе при отеле.'
        ],
        included: [
            'Professional tour guide',
            'Historical maps and materials',
            'Entry to public buildings',
            'Small group experience (max 15 people)'
        ],
        meetingPoint: 'Встречаемся у южных ворот Капитолия Техаса (пересечение Congress Ave и 11th St)',
        meetingPointLink: 'https://maps.app.goo.gl/vTTBHFYjYFnkgYPB6',
        difficulty: 'Easy'
    },
    {
        id: 'Gcrt',
        title: 'Квест-экскурсия по Джорджтауну + музей!',
        description: 'Увлекательная экскурсия-квест для взрослых и детей по историческому центру Джорджтауна — одному из самых красивых и уютных городков Техаса!',
        duration: '1.5 часа',
        price: 0,
        imageUrl: 'https://images.unsplash.com/photo-1606251671317-19fb334213ba?q=80&w=800&h=600&fit=crop',

        highlights: [
            'Прогулка-квест по центральной площади Джорджтауна — разгадаем загадки зданий, стоящихна ней, рассмотрим архитектуру и скульптуры, познакомимся с прошлым Техаса.',
            'Перерыв на кофе в уютном кафе.',
            'Экскурсия по музею Уильямсона — ожившая история округа, интересные экспонаты и атмосфера прошлого.',
            'Подходит для взрослых и детей 7+',
            'После экскурсии - кофе-брейк или поход в кафе- мороженое!'
        ],
        included: [
            'Expert food guide',
            'All food tastings',
            'Recipe cards to take home',
            'Market shopping tips',
            'Dietary restrictions accommodated'
        ],
        meetingPoint: 'Встречаемся на центральной площади Джорджтауна, около Williamson museum',
        meetingPointLink: 'https://maps.app.goo.gl/c9spEFwMY7VWcPTS6',
        difficulty: 'Easy'
    },
    {
        id: 'Albjwc',
        title: 'Экскурсия в Lady Bird Johnson Wildflower Center',
        description: 'Прогулка по удивительному месту, где природа переплетается с историей и культурным наследием Техаса. Это не просто ботанический сад, а живая энциклопедия южноамериканского ландшафта и дань уважения женщине, чьё влияние навсегда изменило облик страны.',
        duration: '1-1,5 ч',
        price: 0,
        imageUrl: 'https://images.unsplash.com/photo-1471644806490-77c53366b18b?w=800&h=600&fit=crop',
        highlights: [
            'История Леди Бёрд Джонсон — первой леди США. Мы поговорим о её вкладе в озеленение городов, борьбу за сохранение природной красоты Америки и её роли в культурной истории 60-х годов',
            'Рассказ об архитектуре и ландшафтном дизайне центра. Вы сделаете потрясающие кадры с расположенной на башне смотровой площадки',
            'Поговорим о символике растений в искусстве и народной культуре Техаса'
        ],
        included: [
            'Photography guide',
            'Tripod rental available',
            'Photo editing tips',
            'Location map for future visits',
            'Small group (max 10 people)'
        ],
        meetingPoint: 'Lady Bird Johnson Wildflower Center',
        meetingPointLink: 'https://maps.app.goo.gl/aJf3ShjPhDnvwdJq5',
        difficulty: 'Moderate'
    }
];
