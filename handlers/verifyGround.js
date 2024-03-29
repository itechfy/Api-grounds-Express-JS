const { db } = require("../utils/admin");
// const { Cricket, Football } = require("../data/data.ground");
// const { Owners } = require("../data/data.owner");
exports.setVerified = async (req, res) => {
  const { id, type, city } = req.query;
  try {
    let paramsString = `${city}.${id}.verified`; // DOT Notation to update nested objects
    const obj = {
      [paramsString]: true,
    };
    db.doc(`grounds/${type}`).update(obj).then(() => {
        console.log("Update success");
        res.status(201).json({
          verified: true,
        });
      })
      .catch((error) => console.error("Error: ", error));
   
  } catch (error) {
    return res
      .status(500)
      .json({ general: "Something went wrong, please try again" });
  }
};
