import Brand from '../models/Brand';

class BrandController {
  async index(req, res) { }

  async show(req, res) { }

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
