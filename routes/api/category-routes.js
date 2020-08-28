const router = require('express').Router();
// Require all of the models
const {Category, Product} = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req,res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Product
        }
      ]
    });
    res.json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  } 
});

router.get('/:id', async (req,res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const {id} = req.params;
  try {
    const categoryData = await Category.findOne({
      where: {
        id
      },
      include: [{
        model: Product
      }]
    });
    // Print data as Json
    res.json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req,res) => {
  // create a new category
  try {
    const {id, category_name} = req.body;
    const categoryData = await Category.create({
      id,
      category_name
    });
    res.json(categoryData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req,res) => {
  // update a category by its `id` value
  try {
    const {id} = req.params;
    const categoryData = await Category.update(req.body, {
      where: {
        id
      }
    });
    res.json(categoryData);
  }
  catch (err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req,res) => {
  // delete a category by its `id` value
  try {
    const {id} = req.params;
    const categoryData = await Category.destroy({
      where: {
        id
      }
    });
    res.json(categoryData);
  }
  catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
