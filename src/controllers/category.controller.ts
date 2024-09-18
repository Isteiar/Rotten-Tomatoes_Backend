import {  Response } from "express";
import { ExtendedRequest } from "../../interfaces/extendedRequest.interface";
import { CategoryTable } from "../models/category.model";

// Controller function to get all categories
export const getAllCategories = async (req: ExtendedRequest, res: Response) => {
    try {
      const categories = await CategoryTable.findAll();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message: "Failed to retrieve categories ", error: err });
    }
  };


  // Controller function to get a single category by categoryId
export const getSingleCategory = async (req: ExtendedRequest, res: Response) => {
    try {
      const { categoryId } = req.params;
      const category = await CategoryTable.findByPk(categoryId);
  
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Failed to retrieve category", error: err });
    }
  };


// // Controller function to update a category by categoryId
// export const updateCategory = async (req: ExtendedRequest, res: Response) => {
//     try {
//       const { categoryId } = req.params;
//       const updated = await CategoryTable.update(req.body, {
//         where: { categoryId },
//       });
  
//       if (updated) {
//         const updatedCategory = await CategoryTable.findByPk(categoryId);
//         res.status(201).json(updatedCategory);
//       } else {
//         res.status(404).json({ message: "Category not found" });
//       }
//     } catch (err) {
//       res.status(500).json({ message: "Failed to update category", error: err });
//     }
//   };
  
//   // Controller function to delete a category by categoryId
//   export const deleteCategory = async (req: ExtendedRequest, res: Response) => {
//     try {
//       const { categoryId } = req.params;
//       const deleted = await CategoryTable.destroy({
//         where: { categoryId },
//       });
  
//       if (deleted) {
//         res.status(201).json({ message: "Category deleted successfully" });
//       } else {
//         res.status(404).json({ message: "Category not found" });
//       }
//     } catch (error) {
//       res.status(500).json({ message: "Failed to delete category", error });
//     }
//   };
  
//   // Controller function to add a new category
//   export const createCategory = async (req: ExtendedRequest, res: Response) => {
//     try {
//       const newCategory = await CategoryTable.create(req.body);
//       res.status(201).json(newCategory);
//     } catch (err) {
//       res.status(500).json({ message: "Failed to create category", error: err });
//     }
//   };
  
  




