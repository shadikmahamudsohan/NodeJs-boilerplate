const {
  createBrandService,
  getBrandsService,
  getBrandByIdService,
  updateBrandService,
  deleteBrandByIdService
} = require("../services/brand.service");


exports.createBrand = async (req, res, next) => {
  try {
    const result = await createBrandService(req.body);

    res.status(200).json({
      status: "success",
      message: "Successfully created the brand"
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: "Couldn't create the brand"
    });
  }
};


exports.getBrands = async (req, res, next) => {
  console.log("inside get");
  try {
    const brands = await getBrandsService(req.body);

    res.status(200).json({
      status: "success",
      data: brands
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error: "Couldn't get the brands",
    });
  }
};

exports.getBrandById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const brand = await getBrandByIdService(id);

    if (!brand) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't find a brand with this id"
      });
    }

    res.status(200).json({
      status: "success",
      data: brand,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error: "Couldn't get the brands",
    });
  }
};

exports.updateBrand = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await updateBrandService(id, req.body);

    console.log(result);

    if (!result.nModified) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't update the brand with this id",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully updated the brand"
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      error: "Couldn't update the brand",
    });
  }
};

exports.deleteBrandById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await deleteBrandByIdService(id);

    if (!result.deletedCount) {
      return res.status(400).json({
        status: "fail",
        error: "Couldn't delete the Brand"
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully deleted the Brand",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't delete the Brand",
      error: error.message,
    });
  }
};
