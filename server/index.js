const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8001;

// const authRouter = require("./routers/auth");
// const profileRoute = require("./routers/profile");
// const homeRoute = require("./routers/home");
// const groupRoute = require("./routers/group");

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(authRouter);
// app.use(homeRoute);
// app.use(profileRoute);
// app.use(groupRoute);

const uri = process.env.DB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    await client.connect();

    const userCollection = client.db("bondhuDB").collection("users");
    const postCollection = client.db("bondhuDB").collection("posts");
    const groupsCollection = client.db("bondhuDB").collection("groups"); //? Collection of groups
    const groupPostCollection = client.db("bondhuDB").collection("groupposts"); //? Collection for group posts
    const groupMemberCollection = client
      .db("bondhuDB")
      .collection("groupmember"); //? Collection for Group Members

    const reactionCollection = client.db("bondhuDB").collection("reactions");
    const commentCollection = client.db("bondhuDB").collection("comments");

    /* Page */
    const pagesCollection = client.db("bondhuDB").collection("pages");
    const pagePostCollection = client.db("bondhuDB").collection("pageposts");
    const pageMemberCollection = client.db("bondhuDB").collection("pagemember");

    /*
     ** User verification methods
     * start
     */
    const findUser = async (req, res, next) => {
      const email = req.headers?.email;
      const password = req.headers?.password;
      const query = { email, password };
      const result = await userCollection.findOne(query);

      req.result = result;

      next();
    };

    /*
     ** User verification methods
     * ends here
     */

    app.get("/", async (req, res) => {
      res.send("Sweet Home");
    });

    /**
     * ! Methods for user
     **/
    app.post("/createuser", async (req, res) => {
      const user = req.body;
      const { email } = user;
      const query = { email: email };
      const userData = await userCollection.findOne(query);

      if (userData) {
        res.send({ error: "user already exists" });
        return;
      }
      const result = await userCollection.insertOne({
        ...user,
        userName: email?.split("@")[0],
      });
      res.send({ success: "Account created successfully!" });
    });

    app.get("/getuser", async (req, res) => {
      const { email, password } = req.headers;
      const query = { email, password };
      const userData = await userCollection.findOne(query);

      if (!userData) {
        res.send({ error: "user already exists" });
        return;
      }
      res.send({ success: "user found", ...userData });
    });

    app.get("/getuser/:email", async (req, res) => {
      const { email } = req.params;
      if (!email) return res.send({ error: "bad request" });
      const query = { email };
      const userData = await userCollection.findOne(query);

      res.send({ success: "user found", ...userData });
    });
    app.get("/getuserByUserName/:userName", async (req, res) => {
      const { userName } = req.params;
      console.log(userName);
      if (!userName) return res.send({ error: "bad request" });
      const query = { userName };
      const userData = await userCollection.findOne(query);
      res.send(userData);
    });

    // app.put("/updateuser/:id", findUser, async (req, res) => {
    //   //! user should be veriied

    //   const id = req.params.id;
    //   const query = { _id: new Object(id) };
    //   const userData = await userCollection.findOne(query);

    //   if (req.result.email !== userData.email) {
    //     return res.send({ error: "bad request" });
    //   }

    //   const options = { upsert: false };
    //   const updateUser = req.body;

    //   const setUser = {
    //     $set: {
    //       ...updateUser,
    //     },
    //   };
    //   const result = await userCollection.updateOne(query, setUser, options);
    //   res.send(result);
    // });

    app.put("/updateuser/:email", findUser, async (req, res) => {
      //! user should be veriied

      const email = req.params?.email;
      console.log(email);
      const query = { email };
      const userData = await userCollection.findOne(query);

      if (req.result?.email !== userData?.email) {
        return res.send({ error: "bad request" });
      }

      const options = { upsert: false };
      const updateUser = req.body;

      const setUser = {
        $set: {
          ...updateUser,
        },
      };
      const result = await userCollection.updateOne(query, setUser, options);
      res.send(result);
    });
    app.put("/updateuserByUserName/:userName", findUser, async (req, res) => {
      //! user should be veriied

      const userName = req.params?.userName;
      const query = { userName };
      const userData = await userCollection.findOne(query);

      if (req.result.email !== userData.email) {
        return res.send({ error: "bad request" });
      }

      const options = { upsert: false };
      const updateUser = req.body;

      const setUser = {
        $set: {
          ...updateUser,
        },
      };
      const result = await userCollection.updateOne(query, setUser, options);
      res.send(result);
    });

    /**
     * ! Methods for posts
     **/
    app.post("/createpost", findUser, async (req, res) => {
      //* user should be veriied
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const post = req.body;
      const result = await postCollection.insertOne({
        ...post,
        userName: req.headers?.email?.split("@")[0],
      });
      res.send(result);
    });

    app.put("/updatepost/:id", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const options = { upsert: false };
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
        email: req.headers?.email,
        password: req.headers?.password,
      };
      let result = await postCollection.findOne(query);

      const updatePost = req.body;
      const setPost = {
        $set: {
          ...updatePost,
        },
      };

      if (result) {
        const responseData = await postCollection.updateOne(
          query,
          setPost,
          options
        );
        return res.send(responseData);
      }

      result = await groupPostCollection.findOne(query);

      if (result) {
        const responseData = await groupPostCollection.updateOne(
          query,
          setPost,
          options
        );
        return res.send(responseData);
      }

      return res.send({ error: "post doen't exist" });
    });

    app.get("/getposts", async (req, res) => {
      const result = await postCollection.find().sort({ _id: -1 }).toArray();
      console.log(result);
      return res.send(result);
    });
    app.get("/getposts/:userName", async (req, res) => {
      const { userName } = req.params;
      const result = await postCollection
        .find({ userName })
        .sort({ _id: -1 })
        .toArray();

      res.send(result);
    });

    app.get("/getposts/:id", async (req, res) => {
      const result = await postCollection
        // .find({ status: "active" })
        .findOne({ _id: new ObjectId(req.params?.id) })
        .sort({ _id: -1 })
        .toArray();

      res.send(result);
    });

    app.get("/getanypost/:id", async (req, res) => {
      const { id } = req.params;
      let result = await postCollection.findOne({
        _id: new ObjectId(id),
      });
      if (result) return res.send(result);
      result = await groupPostCollection.findOne({
        _id: new ObjectId(id),
      });
      if (result) return res.send(result);
      return res.send({ error: "bed request" });
    });

    app.delete("/deletepost/:id", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const options = { upsert: false };
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id),
        email: req.headers?.email,
        password: req.headers?.password,
      };
      let result = await postCollection.findOne(query);
      // const result = await groupPostCollection.findOne(query);

      if (result) {
        const responseData = await postCollection.deleteOne(query);
        return res.send(responseData);
      }
      result = await groupPostCollection.findOne(query);
      // const result = await groupPostCollection.findOne(query);

      if (result) {
        const responseData = await groupPostCollection.deleteOne(query);
        return res.send(responseData);
      }

      return res.send({ error: "post doen't exist" });
    });

    /**
     * ! Methods for GroupPost
     * * Check it and update where needed
     **/

    // app.post("/creategrouppost", findUser, async (req, res) => {
    //   if (!req.result) {
    //     return res.send({ error: "bad request" });
    //   }

    //   const groupName = req.body.groupName;
    //   const findGroup = await groupsCollection.findOne({
    //     groupName: groupName,
    //   });

    //   if (!findGroup) {
    //     return res.send({ error: "Group not exist" });
    //   }

    //   const post = req.body;
    //   const creationResult = await groupPostCollection.insertOne(post);

    //   const adminResult = await groupMemberCollection.insertOne({
    //     groupName: post.groupName,
    //     email: post.email,
    //     status: "admin",
    //   });

    //   res.send({ creationResult, adminResult });
    // });

    app.post("/creategrouppost", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const groupName = req.body.groupName;
      const findGroup = await groupsCollection.findOne({
        groupName: groupName,
      });

      if (!findGroup) {
        return res.send({ error: "Group not exist" });
      }

      const post = req.body;
      const creationResult = await groupPostCollection.insertOne(post);

      // const adminResult = await groupMemberCollection.insertOne({
      //   groupName: post.groupName,
      //   email: post.email,
      //   status: "admin",
      // });

      // res.send({ creationResult, adminResult });
      return res.send(creationResult);
    });

    /* 
    Maybe ❌❌❌
    */
    app.put("/updategrouppost/:id", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const options = { upsert: false };
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await groupPostCollection.findOne(query);

      if (req.result?.email !== result?.email) {
        return res.send({ error: "bad request" });
      }

      const updatePost = req.body;
      // console.log(updatePost);
      // console.log(result);
      const setPost = {
        $set: {
          ...updatePost,
        },
      };

      const newresult = await groupPostCollection.updateOne(
        query,
        setPost,
        options
      );
      return res.send(newresult);
    });
    app.delete("/deletegrouppost/:id", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const options = { upsert: false };
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await groupPostCollection.findOne(query);

      if (req.result?.email !== result?.email) {
        return res.send({ error: "bad request" });
      }

      const responseData = await groupPostCollection.deleteOne(query);
      return res.send(responseData);
    });

    app.get("/getgroupposts", async (req, res) => {
      const result = await groupPostCollection
        .find()
        .sort({ _id: -1 })
        .toArray();

      res.send(result);
    });

    app.get("/getgroupposts/:groupName", async (req, res) => {
      const result = await groupPostCollection
        .find({ groupName: req.params.groupName })
        .sort({ _id: -1 })
        .toArray();

      res.send(result);
    });

    app.get("/getgroupsinglepost/:id", async (req, res) => {
      try {
        const result = await groupPostCollection.findOne({
          _id: new ObjectId(req.params?.id),
        });

        return res.send(result);
      } catch (error) {
        return res.send({});
      }
    });

    /**
     * ! Methods for Groups
     * * Check it and update where needed
     **/

    app.post("/creategroup", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const groupName = req.body.groupName;
      const findGroup = await groupsCollection.findOne({
        groupName: groupName,
      });

      if (findGroup) {
        return res.send({ error: "Group already exist" });
      }

      // const email = req.body.email;
      // const query = { email: email };

      const post = req.body;
      const creationResult = await groupsCollection.insertOne(post);

      const adminResult = await groupMemberCollection.insertOne({
        groupName: post.groupName,
        email: post.email,
        status: "admin",
      });

      res.send({ creationResult, adminResult });
    });

    // /group/group_name
    app.put("/updategroup/:groupName", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const options = { upsert: false };
      const groupName = req.params.groupName;
      const query = { groupName };
      const result = await groupsCollection.findOne(query);

      if (req.result?.email !== result?.email) {
        return res.send({ error: "bad request" });
      }

      const updateGroup = req.body;
      const setGroup = {
        $set: {
          ...updateGroup,
        },
      };

      const newresult = await groupsCollection.updateOne(
        query,
        setGroup,
        options
      );

      if (!updateGroup["groupCover"]) return res.send(newresult);
      const updateMembersData = await groupMemberCollection.updateMany(query, {
        $set: {
          groupCover: updateGroup["groupCover"],
        },
      });

      res.send(updateMembersData);
    });

    app.get("/getgroup/:groupName", async (req, res) => {
      const result = await groupsCollection.findOne({
        groupName: req.params.groupName,
      });
      return res.send(result);
    });

    app.get("/getjoinedgroups", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const result = await groupMemberCollection
        .find({ email: req.result?.email })
        .sort({ _id: -1 })
        .toArray();

      res.send(result);
    });

    app.get("/getmygroups", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const result = await groupsCollection
        .find({ email: req.result?.email })
        .sort({ _id: -1 })
        .toArray();

      res.send(result);
    });

    app.get("/getallgroups", async (req, res) => {
      const result = await groupsCollection.sort({ _id: -1 }).toArray();

      res.send(result);
    });

    app.get("/getallgroupspost", async (req, res) => {
      const data = await groupPostCollection.find().sort({ _id: -1 }).toArray();
      return res.send(data);
    });
    /**
     * ! Methods for Group Members
     * * Check it and update where needed
     **/
    app.get("/getgroupadmin/:groupName", findUser, async (req, res) => {
      const result = await groupMemberCollection.findOne({
        groupName: req.params.groupName,
        status: "admin",
      });
      const adminData = await userCollection.findOne({ email: result?.email });
      return res.send(adminData);
    });

    app.post("/addgroupmember/:groupName", findUser, async (req, res) => {
      const { groupName } = req.params;
      const result = await groupMemberCollection.insertOne({
        groupName,
        email: req?.headers?.email,
        status: "member",
      });

      return res.send(result);
    });

    app.get("/getgroupmembers/:groupName", async (req, res) => {
      const result = await groupMemberCollection
        .find({ groupName: req.params.groupName })
        .toArray();

      return res.send(result);
    });

    app.get("/verifygroupauthor", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const result = await groupMemberCollection.findOne({
        groupName: req.headers.groupName,
        email: req.headers.email,
      });

      if (!result) return res.send({ data: false });
      if (result?.status === "admin") return res.send({ data: true });
      return res.send({ data: false });
    });

    app.get("/groupmemberornot/:groupName", findUser, async (req, res) => {
      const { groupName } = req.params;
      const { email } = req.result;

      const memberData = await groupMemberCollection.findOne({
        groupName,
        email,
      });
      return res.send(memberData);
    });

    app.get("/verifygroupmember", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const result = await groupMemberCollection.findOne({
        groupName: req.headers.groupName,
        email: req.headers.email,
      });

      if (!result) return res.send({ data: false });
      if (result?.status === "member") return res.send({ data: true });
      return res.send({ data: false });
    });

    app.delete("/leavegroupmember/:groupName", findUser, async (req, res) => {
      const { groupName } = req.params;
      if (!req.result) {
        return res.send({ error: "bad request" });
      }
      const result = await groupMemberCollection.findOne({
        groupName,
        email: req.headers.email,
      });

      if (!result) return res.send({ error: "bad request" });
      if (result?.status === "member") {
        const deleteResult = await groupMemberCollection.deleteOne({
          ...result,
        });
        return res.send(deleteResult);
      }
      return res.send({ error: "Admin can't leave" });
    });

    app.delete("/deletegroup", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const result = await groupMemberCollection.findOne({
        groupName: req.headers.groupName,
        email: req.headers.email,
      });

      if (!result || result?.status === "member")
        return res.send({ error: "bad request" });

      const deleteGroupPostResult = await groupPostCollection.deleteMany({
        groupName: result.groupName,
      });
      const deleteGroupResult = await groupsCollection.deleteOne({
        groupName: result.groupName,
      });
      const deleteMembersResult = await groupsCollection.deleteMany({
        groupName: result.groupName,
      });

      return res.send({
        deleteGroupPostResult,
        deleteGroupResult,
        deleteMembersResult,
      });
    });

    /*
     *** page==================
     */
    app.post("/createpage", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const pageName = req.body.pageName;
      const findpage = await pagesCollection.findOne({ pageName: pageName });

      if (findpage) {
        return res.send({ error: "page already exist" });
      }

      const post = req.body;
      const creationResult = await pagesCollection.insertOne(post);

      const adminResult = await pageMemberCollection.insertOne({
        pageName: post.pageName,
        email: post.email,
        status: "admin",
      });

      res.send({ creationResult, adminResult });
    });

    app.put("/updatepage/:pageName", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const options = { upsert: false };
      const pageName = req.params.pageName;
      const query = { pageName };
      const result = await pagesCollection.findOne(query);

      if (req.result?.email !== result?.email) {
        return res.send({ error: "bad request" });
      }

      const updatePage = req.body;
      const setPage = {
        $set: {
          ...updatePage,
        },
      };

      const newresult = await pagesCollection.updateOne(
        query,
        setPage,
        options
      );

      if (!updatePage["pageCover"]) return res.send(newresult);
      const updateMembersData = await pageMemberCollection.updateMany(query, {
        $set: {
          groupCover: updatePage["pageCover"],
        },
      });

      res.send(updateMembersData);
    });

    app.get("/getjoinedpages", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const result = await pageMemberCollection
        .find({ email: req.result?.email })
        .sort({ _id: -1 })
        .toArray();

      res.send(result);
    });

    app.get("/getmypages", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const result = await pagesCollection
        .find({ email: req.result?.email })
        .sort({ _id: -1 })
        .toArray();

      res.send(result);
    });

    app.get("/getpage/:pageName", async (req, res) => {
      const result = await pagesCollection.findOne({
        pageName: req.params.pageName,
      });
      return res.send(result);
    });
    app.get("/getpagemembers/:pageName", async (req, res) => {
      const result = await pageMemberCollection
        .find({ pageName: req.params.pageName })
        .toArray();

      return res.send(result);
    });
    app.get("/getpageposts/:pageName", async (req, res) => {
      const result = await pagePostCollection
        .find({ pageName: req.params.pageName })
        .sort({ _id: -1 })
        .toArray();

      res.send(result);
    });
    app.get("/getpageadmin/:pageName", findUser, async (req, res) => {
      const result = await pageMemberCollection.findOne({
        pageName: req.params.pageName,
        status: "admin",
      });

      const adminData = await userCollection.findOne({ email: result?.email });
      return res.send(adminData);
    });
    app.get("/pagememberornot/:pageName", findUser, async (req, res) => {
      const { pageName } = req.params;
      const { email } = req.result;

      const memberData = await pageMemberCollection.findOne({
        pageName,
        email,
      });
      return res.send(memberData);
    });
    app.post("/addpagemember/:pageName", findUser, async (req, res) => {
      const { pageName } = req.params;
      const result = await pageMemberCollection.insertOne({
        pageName,
        email: req?.headers?.email,
        status: "member",
      });

      return res.send(result);
    });

    app.delete("/leavepagemember/:pageName", findUser, async (req, res) => {
      const { pageName } = req.params;
      if (!req.result) {
        return res.send({ error: "bad request" });
      }
      const result = await pageMemberCollection.findOne({
        pageName,
        email: req.headers?.email,
      });

      if (!result) return res.send({ error: "bad request" });
      if (result?.status === "member") {
        const deleteResult = await pageMemberCollection.deleteOne({
          ...result,
        });
        return res.send(deleteResult);
      }
      return res.send({ error: "Admin can't leave" });
    });

    app.post("/createpagepost", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const pageName = req.body.pageName;
      const findPage = await pagesCollection.findOne({
        pageName,
      });

      if (!findPage) {
        return res.send({ error: "Group not exist" });
      }

      const post = req.body;
      const creationResult = await pagePostCollection.insertOne(post);

      // const adminResult = await pageMemberCollection.insertOne({
      //   pageName: post.pageName,
      //   email: post.email,
      //   status: "admin",
      // });

      // res.send({ creationResult, adminResult });
      return res.send(creationResult);
    });

    app.get("/getpagesinglepost/:id", async (req, res) => {
      try {
        const result = await pagePostCollection.findOne({
          _id: new ObjectId(req.params?.id),
        });

        return res.send(result);
      } catch (error) {
        return res.send({});
      }
    });
    app.get("/getallpagespost", async (req, res) => {
      const data = await pagePostCollection.find().sort({ _id: -1 }).toArray();
      return res.send(data);
    });

    /* 
    Reactions ======================================
    */
    app.post("/react/:id", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }
      const postId = req.params.id;
      const email = req.headers?.email;
      const result = await reactionCollection.findOne({ postId, email });
      if (!result) {
        const user = await userCollection.findOne({ email });
        delete user._id;
        const newResult = await reactionCollection.insertOne({
          postId,
          ...user,
        });
        return res.send(newResult);
      }

      const deleteResult = await reactionCollection.deleteOne({
        postId,
        email,
      });
      return res.send(deleteResult);
    });

    app.get("/reactionstatus/:id", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }
      const { id } = req.params;
      const email = req.headers?.email;

      const result = await reactionCollection.findOne({ postId: id, email });
      res.send(Boolean(result));
    });

    app.get("/totalreaction/:id", async (req, res) => {
      const postId = req.params.id;

      const result = await reactionCollection.find({ postId }).toArray();
      return res.send(result);
    });

    /*
     ********* Comment ********************
     */
    app.post("/comment/:id", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const postId = req.params?.id;
      const email = req.headers?.email;
      const comment = req.body.comment;

      const user = await userCollection.findOne({ email });
      delete user._id;
      const newResult = await commentCollection.insertOne({
        postId,
        comment,
        commentedTime: Date.now(),
        ...user,
      });
      return res.send(newResult);
    });

    app.get("/comment/:id", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }
      const { id: postId } = req.params;

      const result = await commentCollection
        .find({ postId })
        .sort({ _id: -1 })
        .toArray();
      return res.send(result);
    });

    /*
     ******** Share **********
     */
    app.post("/sharepost/:id", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }
      const { id } = req.params;

      const query = {
        email: req.headers?.email,
        password: req.headers?.password,
      };
      const sharedUser = await userCollection.findOne(query);
      delete sharedUser?._id;

      if (!sharedUser) return res.send({ error: "bad request" });

      let postData = await postCollection.findOne({ _id: new ObjectId(id) });

      if (postData) {
        const { heading, postMessage, postPrivacy, uploadedDate, postImg } =
          postData;
        const resultData = await postCollection.insertOne({
          ...query,
          heading,
          postMessage,
          postPrivacy,
          uploadedDate: Date.now(),
          postImg,
        });
        return res.send(resultData);
      }

      postData = await groupPostCollection.findOne({ _id: new ObjectId(id) });

      if (postData) {
        const { heading, postMessage, postPrivacy, uploadedDate, postImg } =
          postData;
        const resultData = await postCollection.insertOne({
          ...query,
          heading,
          postMessage,
          postPrivacy,
          uploadedDate: Date.now(),
          postImg,
        });
        return res.send(resultData);
      }

      res.send({ error: "post not exist" });
    });

    /*
     ****** search ***********
     */
    app.post("/search", findUser, async (req, res) => {
      if (!req.result) {
        return res.send({ error: "bad request" });
      }

      const { text, type } = req.body;

      let result = [];
      if (type.toLocaleLowerCase() === "username") {
        result = await userCollection
          .find({ userName: text })
          .sort({ _id: -1 })
          .toArray();
      } else if (type.toLocaleLowerCase() === "fullname") {
        result = await userCollection
          .find({ fullName: { $regex: text, $options: "i" } })
          .sort({ _id: -1 })
          .toArray();
      } else if (type.toLocaleLowerCase() === "group") {
        result = await groupsCollection
          .find({ groupName: { $regex: text, $options: "i" } })
          .sort({ _id: -1 })
          .toArray();
      } else if (type.toLocaleLowerCase() === "page") {
        result = await pagesCollection
          .find({ pageName: { $regex: text, $options: "i" } })
          .sort({ _id: -1 })
          .toArray();
      }

      return res.send(result);
    });

    app.listen(port, () => {
      console.log(`server is running at http://localhost:${port}`);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
