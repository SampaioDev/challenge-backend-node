import api from '../../api.js'

export const get = async(req, res) => {
  return res.send({ message: "TESTE" });
};

export const getMovieByTitle =  async (req, res) => {
    const {title} = req.params; 

    try {
      const {data} = await api.get(process.env.BASE_URL, {params: {apikey:process.env.API_KEY, t: title}});
  
      return res.send({ data });
    } catch (error) {
      res.send({ error: error.message });
    }
  }

export const getMoviesByTitle =  async (req, res) => {
  const {title} = req.params; 

  try {
    const {data} = await api.get(process.env.BASE_URL, {params: {apikey:process.env.API_KEY, s: title}});

    return res.send({ data });
  } catch (error) {
    res.send({ error: error.message });
  }
}

export const getMovieByID =  async (req, res) => {
  const {id} = req.params; 

  try {
    const {data} = await api.get(process.env.BASE_URL, {params: {apikey:process.env.API_KEY, i: id}});

    return res.send({ data });
  } catch (error) {
    res.send({ error: error.message });
  }
}
