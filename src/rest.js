export default function () {
  let [s1, s0, ...s2] = [100, 200, 300, 400, 500];

  let [a = 1, b = 2] = [100, 200, 300, 400, 500];

  console.log(a);
  console.log(b);
}
