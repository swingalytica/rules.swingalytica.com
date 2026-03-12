import { Rule } from '../../types/models';
import { GROUPS, PREFIX } from './const';

export function groupRules(sorted_rules: Rule[], lang: string) {
  const prefix = PREFIX[lang as keyof typeof PREFIX] ?? PREFIX.de;
  const def_title = lang === 'de' ? 'Definitionen' : 'Definitions';

  return GROUPS.map((group) => ({
    title: group[lang as keyof typeof PREFIX] ?? group.de,
    rules: sorted_rules.filter((rule) => {
      const title = rule.translations?.[lang]?.title;
      if (!title) return false;
      if (group.rules.length === 0) return title === def_title;
      return group.rules.some((n) =>
        title.startsWith(`${prefix} ${n} `)
      );
    })
  }));
}
