// Разделы главной. Раскладка статей больше НЕ хранится тут списками:
// раздел указывается в самой статье (`section:` во фронтматтере), а если он
// не проставлен — определяется по тегам и заголовку. Так новая статья
// попадает в нужный раздел сама, без правки этого файла.
export type SectionId = 'emotions' | 'school' | 'relations' | 'behaviour';

export type Section = {
  id: SectionId;
  title: string;
  hint: string;
  tags: string;
  /** слова-подсказки для автоопределения раздела по тегам и заголовку */
  match: string[];
};

export const SECTIONS: Section[] = [
  {
    id: 'emotions',
    title: 'Эмоции и страхи',
    hint: 'Когда ребёнок кричит, боится, тревожится или закрывается',
    tags: 'Истерики · страхи · тревога · застенчивость',
    match: ['истерик', 'страх', 'боится', 'тревог', 'застенчив', 'кошмар', 'ногти', 'эмоц', 'паник'],
  },
  {
    id: 'school',
    title: 'Школа',
    hint: 'Когда утро начинается со слов «я не хочу в школу»',
    tags: 'Домашка · адаптация · буллинг · сборы',
    match: ['школ', 'домашк', 'домашн', 'урок', 'учител', 'класс', 'буллинг', 'травл', 'садик', 'сад', 'сбор', 'опазд', 'оценк', 'адаптац'],
  },
  {
    id: 'relations',
    title: 'Отношения',
    hint: 'Ссоры, ревность, дружба и всё, что происходит между детьми',
    tags: 'Ссоры · ревность · похвала · дружба',
    match: ['ссор', 'ревно', 'брат', 'сестр', 'друж', 'друз', 'хвалит', 'похвал', 'врёт', 'ложь', 'ябед', 'жадн', 'делит'],
  },
  {
    id: 'behaviour',
    title: 'Поведение и самостоятельность',
    hint: 'Телефон, грубость, нытьё и первые шаги к самостоятельности',
    tags: 'Телефон · грубость · нытьё · порядок',
    match: ['телефон', 'гаджет', 'экран', 'груб', 'огрыз', 'ноет', 'клянч', 'убира', 'порядок', 'самостоят', 'играет', 'дерётс', 'куса', 'еда', 'привереда', 'негативизм', 'перебива', 'слушает', 'проигрыв', 'горшок'],
  },
];

type ArticleLike = { id: string; data: { title: string; tags?: string[]; section?: SectionId } };

/**
 * Раздел статьи: явное поле → подсказки по тегам и заголовку → null.
 * null означает, что статья попадёт только в общую ленту, и сборка об этом предупредит.
 */
export function sectionOf(article: ArticleLike): SectionId | null {
  if (article.data.section) return article.data.section;
  const hay = [article.id, article.data.title, ...(article.data.tags ?? [])].join(' ').toLowerCase();
  let best: { id: SectionId; hits: number } | null = null;
  for (const s of SECTIONS) {
    const hits = s.match.filter((w) => hay.includes(w)).length;
    if (hits > 0 && (!best || hits > best.hits)) best = { id: s.id, hits };
  }
  return best ? best.id : null;
}

/** Группировка для главной. Отдаёт и «потерявшиеся» статьи, чтобы о них предупредить. */
export function groupBySection<T extends ArticleLike>(articles: T[]) {
  const groups = new Map<SectionId, T[]>(SECTIONS.map((s) => [s.id, [] as T[]]));
  const orphans: T[] = [];
  for (const a of articles) {
    const id = sectionOf(a);
    if (id) groups.get(id)!.push(a);
    else orphans.push(a);
  }
  return { groups, orphans };
}
