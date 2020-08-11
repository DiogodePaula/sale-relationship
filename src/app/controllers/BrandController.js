import Brand from '../models/Brand';

class BrandController {
  async index(req, res) { }

  async show(req, res) {
    try {
      const { uid } = req.params;

      const product = await Brand.findByPk(uid, {
        attributes: ['uid', 'name', 'quantity'],
        include: {
          model: Brand,
          as: 'brand',
          attributes: ['uid', 'name'],
        },
      });
      return res.json({ product });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const brand = await Brand.create(req.body);

      return res.json({ brand });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json({ response });
    }
  }

  async update(req, res) { }

  async delete(req, res) { }
}

export default new BrandController();
