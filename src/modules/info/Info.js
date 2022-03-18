export default function info(req, res) {
  const a = req.body.a;
  const b = req.body.b;
  const sum = a + b;
  res.status(200).json('Here is your Info Vadim' + sum);
}

export const a = 123;
