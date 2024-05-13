
const isSuperAdmin = (req, res, next) => {
    if (req.user.role === 'super-admin') {
      return next(); 
    }
    return res.status(403).json({ message: 'Access denied' });
  };
  
  const isSubAdmin = (req, res, next) => {
    if (req.user.role === 'sub-admin') {
      return next(); 
    }
    return res.status(403).json({ message: 'Access denied' });
  };
  
  module.exports = {
    isSuperAdmin,
    isSubAdmin,
  };
  