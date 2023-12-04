const User = require('../Model/User')



const createUser = async(req,res)=>{

  const {firstName,lastName,email,availability,avatar,domain,gender} = req.body;

  console.log(firstName,lastName)
  const userDoc = await User.create({
    first_name:firstName, 
    last_name:lastName,
    email,
    gender,
    avatar, 
    domain,
    available:availability
  }) 

  res.json(userDoc)
}

const updateUser=async(req,res)=>{
  const {firstName,lastName,email,availability,avatar,domain,gender} = req.body;


}

const fetchUser = async (req, res) => {


  const ITEMS_PER_PAGE = parseInt(req.query.pageSize) || 10;
  const page = parseInt(req.query.currentPage) || 1;
  const domain = req.query.domain || 'undefined'
  const gender = req.query.gender || 'undefined'
  const availablility = req.query.availablility || 'undefined'

  try {
   
    let query = {};

    let flag = false;

    if (domain != 'undefined') {

      query.domain = { $in: domain };
      flag = true;
    }

    if (gender != 'undefined') {

      query.gender = { $in: gender };
      flag = true;
    }
    if (availablility != 'undefined') {

      query.available = { $in: availablility };
      flag = true;
    }
    const totalItems =flag ?  await User.countDocuments(query):await User.countDocuments();
    const totalPages = Math.ceil(totalItems  / ITEMS_PER_PAGE);


    const items = flag ? await User.find(query)
      .skip((page - 1) * ITEMS_PER_PAGE)
      .limit(ITEMS_PER_PAGE) : await User.find()
        .skip((page - 1) * ITEMS_PER_PAGE)
        .limit(ITEMS_PER_PAGE);


    res.json({



      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        pageSize: ITEMS_PER_PAGE
      },
      data: items

    });
  } catch (error) {
    res.status(500).json();
  }
};

const getUserById = async (req, res) => {
  const  uid  = req.query.uid;
  console.log
  try {
    const userFound = await User.find({id:uid});

    if (userFound) {
      res.json(userFound);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { createUser,fetchUser ,getUserById}

