import Product from '../models/Product';
import Brand from '../models/Brand';

class ProductController {
  async index(req, res) {
    try {
      const product = await Product.findAll();

      return res.json({ product });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;

      const product = await Product.findByPk(uid, {
        // selecionar os atributos que eu quero que apareça
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
      const product = await Product.create(req.body);

      return res.json({ product });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json({ response });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const updated = await Product.update(req.body, { where: { uid } });

      if (!updated) {
        throw Error('Produto não encontrado');
      }
      return res.json('DATA_UPDATE');
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await Product.destroy({ where: { uid } });
      if (!deleted) {
        throw Error('Produto não encontrado');
      }
      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new ProductController();
