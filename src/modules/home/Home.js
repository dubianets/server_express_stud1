export default function home(req, res) {
  res.status(200).json({
    text: 'Hello --- Vadim',
    status: true,
  });
}
