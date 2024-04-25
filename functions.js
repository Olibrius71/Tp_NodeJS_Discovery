import {
  app,
  tours
} from "./app.js"


export const getTours = async (req, res) => {
  const toursToReturn = await tours.find(); // Assuming you have a Tour model
  const toursArray = await toursToReturn.toArray();

  res.status(200).json({
    status: 'success',
    data: {
      tours: toursArray
    }
  });
};


export const getToursWithPriceWithin = async (req, res) => {
  const minPrice = req.query.min_price;
  const maxPrice = req.query.max_price;
  
  const filterTours = (tours, minPrice, maxPrice) => {
    return this.filter(tour => tour.price >= minPrice && tour.price <= maxPrice);
  }
 
  const filteredTours = filterTours(tours, minPrice, maxPrice);
  
  res.status(200).json({
    status: "success",
    data: { tours: filteredTours }
  });
};


export const updateTour =async (req, res) => {
  const id = req.params.id * 1;
  //TODO MODIFIER TOUR
  res.status(200).json({
    status: "success",
    data: { tour }
  });
};


export const deleteTourById = async (req, res) => {
  const id = req.params.id * 1;
  console.log(id)
  // const tour = JSON.parse(fs.writeFileSync(`${__dirname}/dev-data/data/tours-simple.json`)).find(t => t.id === id);
  res.status(200).json({
    status: "success",
    data: "ok"
  });
};