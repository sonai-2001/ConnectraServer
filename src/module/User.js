const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    bannerImage: {
      type: String,
    },
    proffession: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    about: {
      type: String,
    },
    website: String,
    github: String,
    education: [
    {
      school: String,
      degree: String,
      fieldOfStudy: String,
      startDate: Date,
      endDate: Date,
      description: String
    }
  ],
    experience: [
      {
        company: String,
        position: String,
        startDate: Date,
        endDate: Date,
        description: String
      }
    ],
    isNewUser: {
    type: Boolean,
    default: true
  },
  skills: {
    type: Array,
    default: []
  }
},
  { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
