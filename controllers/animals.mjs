import pets from "../pets.mjs"

const getAnimalType = (req, res) => {
  const type = req.params.pet_type;

  if (pets?.[type] !== undefined) {
    res.json(pets[type])
  } else {
    res.json({ error: "non existing type" });
  }
};

const getSinglePet = (req, res) => {
  const type = req.params.pet_type;
  const id = req.params.pet_id;

  const pet = pets[type][id];
  if (pets?.[type]?.[id] !== undefined) {
    res.json(pets[type][id])
  } else {
    res.json({ error: "non existing animal" });
  }

  res.json(pet)
};

export { getAnimalType, getSinglePet };
