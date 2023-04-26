//const projectUri = `https://devvca.pushcord.com:8000/vca-front/api/v1.0/ui/front`; //Production server URL
//const baseUri = `http://192.168.18.6:7888/v1`;
//const imageUri = `http://192.168.18.6:7888/`;
const imageUri = `http://3.19.28.78:7888/`;
const baseUri = `http://3.19.28.78:7888/v1`;

const api = {
  baseUri, imageUri,
  register: `/auth/signup`,
  login: `/auth/login`,
  departmentlist: `/users/getDepartmentList`,
  subDepartmentlist: `/users/getsubDepartments`,
  updateWorkdepartment: `/auth/updateWorkDepartments`,
  updateareatotravel: `/auth/updateAreaToTravel`,
  updateAvailabilty: `/auth/updateavailabilty`,
  addnewpost: `/users/addNewPost`,
  postlisting: `/users/postListing`,
  postDetails: `/users/postDetail`,
  commentlistid: `/users/commentList`,
  addcomment: `/users/addComment`,
  sendmessage: `/users/sendMessage`,
  messagelist: `/users/messageList`,
  likeUnlikepost: `/users/likeUnlikePost`,
  viewprofile: `/users/viewProfile`,
  updateProfileImage: `/users/updateprofileImage`,
  updatecoverImage: `/users/updateCoverImage`,
  updateuserAbout: `/users/updateUserAbout`,
  deletePost: `/users/removePost`,
  addnetworkCru: `/users/addToNetworkOrCru`,
  mycru: `/users/myCru`,
  mynetwork: `/users/myNetwork`,
  eventcategory: `/users/eventCategory`,
  eventlist: `/users/events`,
  eventdetail: `/users/eventDetail`,
  notificationlist: `/users/notificationList`,
  addprojectnew: `/users/addNewProject`,
  productiontypes: `/users/productionTypes`,
  myprojectdata: `/users/myProjects`,
  projectdetails: `/users/projectDetails`,
  likelisting: `/users/postLikedBy`,
  invitecruproject: `/users/inviteCruForProject`,
  messagedetail: `/users/messageListDetail`,
  allprojects: `/users/allProjects`,
  applyjobs: `/users/applyJob`,
  declineJobs: `/users/declineJob`,
  removeJobs:`/users/removeJobs`,
  acceptJobs: `/users/acceptJob`,
  // mynetwork: `/users/myNetwork`,
  //  messagelist: `/users/eventCategory`,
  // likeUnlikepost: `/users/likeUnlikePost`,
};

export default api; 