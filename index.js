const { customAlphabet } = require('nanoid');
/**
 * ID Length: 10 characters
 * Speed: 1000 IDs per hour/second
 * Probability of Duplicate: 1% in 4 thousand years
 *
 * Calculation: https://zelark.github.io/nano-id-cc/
 * */
const allowed = {
  characters:
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz-áéíóúüñАаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпРрСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯяІіѲѳѢѣѴѵœ∑´®†¥¨ˆøπ“‘«`åß∂ƒ©˙∆˚¬…æΩ≈ç√∫˜µ≤≥÷¡™£¢∞§¶•ªº–≠',
};
const myni = customAlphabet(allowed, 10);

function customPath(domain, user_name, path) {
  const id = myni;
  const mini_url = `https://${domain}/${user_name}/${path}`
  return {
    id,
    mini_url,
  };
}

function customUserName(domain, user_name) {
  const id = myni;
  const mini_url = `https://${domain}/${user_name}/${id}`
  return {
    id,
    mini_url,
  };
}

function miniUrl(domain) {
  const id = myni;
  const mini_url = `https://${domain}/${id}`
  return {
    id,
    mini_url,
  };
}

module.exports.myniUrl = function myniUrl(domain, user_name, path) {
  if (!domain || domain && !path) throw new Error('1st argument must be a valid URL domain: https://example.com')
  if (!user_name && path) throw new Error('2nd argument must be a valid username')
  if (domain && !user_name && !path) return miniUrl(domain)
  if (domain && user_name && !path) return customUserName(domain, user_name)
  if (domain && user_name && path) return customPath()
}