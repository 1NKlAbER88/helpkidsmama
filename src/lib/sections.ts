// Тематические разделы для главной. Нужны, чтобы поисковик видел структуру сайта,
// а не плоскую ленту статей, и чтобы у каждой статьи была ссылка с главной.
// Слаг попадает в раздел вручную: тегов для этого мало, они у статей разношёрстные.
export type Section = { id: string; title: string; hint: string; slugs: string[] };

export const SECTIONS: Section[] = [
  {
    id: 'emotions',
    title: 'Эмоции и страхи',
    hint: 'Истерики, ночные страхи, тревога, застенчивость',
    slugs: [
      'isteriki-u-rebenka',
      'rebenok-boitsya-temnoty-son',
      'rebenok-nochnye-koshmary',
      'rebenok-boitsya-vrachey',
      'rebenok-boitsya-ostavatsya-bez-mamy',
      'rebenok-boitsya-oshibok',
      'zastenchivyy-rebenok-uverennost',
      'rebenok-gryzet-nogti',
    ],
  },
  {
    id: 'school',
    title: 'Школа и сад',
    hint: 'Домашние задания, адаптация, буллинг, утренние сборы',
    slugs: [
      'trevoga-pered-shkoloy',
      'rebenok-ne-delaet-domashku',
      'rebenok-adaptaciya-novaya-shkola',
      'rebenka-obizhayut-v-shkole-bulling',
      'rebenok-ne-hochet-v-sadik',
      'dolgie-utrennie-sbory',
      'rebenok-planirovanie-vremeni',
    ],
  },
  {
    id: 'relations',
    title: 'Отношения в семье',
    hint: 'Ссоры детей, ревность, похвала, дружба',
    slugs: [
      'detskie-ssory-braty-sestry',
      'revnost-k-novorozhdennomu',
      'kak-hvalit-rebenka-pravilno',
      'kak-nauchit-rebenka-druzhit',
      'rebenok-yabednichaet',
      'rebenok-zhadnichaet-ne-delitsya',
      'rebenok-vret-chto-delat',
    ],
  },
  {
    id: 'behaviour',
    title: 'Поведение и границы',
    hint: 'Телефон, грубость, нытьё, порядок, самостоятельность',
    slugs: [
      'rebenok-v-telefone-chto-delat',
      'rebenok-grubit-ogryzaetsya',
      'rebenok-noet-i-klyanchit',
      'rebenok-ne-ubiraet-igrushki',
      'priuchit-rebenka-k-samostoyatelnosti',
      'rebenok-ne-igraet-sam',
      'rebenok-deretsya-kusaetsya',
      'rebenok-govorit-net-negativizm',
      'rebenok-perebivaet-ne-slyshit',
      'privereda-v-ede',
      'rebenok-ne-umeet-proigryvat',
    ],
  },
];
