import { UserModel } from '../models/UserModel.js';


export const getLikedMovies = async (req, res) => {

  try {
    const { email } = req.params;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        msg: "User Not Found With Given Email For Get Liked Movies"
      })
    }

    return res.status(200).json({
      success: true,
      msg: "Getting Liked Movies",
      movies: user.likedMovies
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server Encountered An Error While Fetching Movies"
    });
  }
};


export const addToLikedMovies = async (req, res) => {

  try {

    const { email, data } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      await UserModel.create({ email, likedMovies: [data] });
      return res.status(201).json({ success: true, msg: "Movie Successfully Added To Liked List" });
    }

    const { likedMovies } = user;
    const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);

    if (!movieAlreadyLiked) {
      await UserModel.findByIdAndUpdate(user._id, { likedMovies: [...user.likedMovies, data] });
      return res.status(201).json({ success: true, msg: "Movie Successfully Added To Liked List" });
    }

    return res.status(200).json({ success: false, msg: "Movie Already Added To Liked List" });

  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Server Encountered An Error While Adding Movie To Liked List"
    });
  }
};


export const removeFromLikedMovies = async (req, res) => {

  try {
    const { email, movieId } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, msg: "User Not Found With Given Email" });
    }

    const movies = user.likedMovies;
    const movieIndex = movies.findIndex(({ id }) => id === movieId);

    if (!(movieIndex >= 0)) {
      return res.status(400).json({ success: false, msg: "Liked Movie Not Found For Delete" });
    }

    movies.splice(movieIndex, 1);
    await UserModel.findByIdAndUpdate(user._id, { likedMovies: movies });
    return res.status(201).json({ success: true, msg: "Movie Successfully Removed", movies });

  } catch (error) {
    return res.status(500).json({ success: false, msg: "Server Encountered An Error While Removing Movie From Liked List" });
  }
};
