const errorMiddleware = (err, req, res, next) => {
    err.message = err.message ||  "Internal server error"
    err.statusCode = err.statusCode || 500

    if(err.code === 11000){
        const error = Object.keys(err.keyPattern).join(",")
        err.message = `Duplicate field - ${error}`
        err.statusCode = 400
    }

    if(err.name === "CastError"){
        const errorPath = err.path
        err.message = `Invalid format of ${errorPath}`,
        err.statusCode = 400
    }

    const response = {
        success: false,
        message: err.message,
      };
    
      if (process.env.NODE_ENV === "DEVELOPMENT") {
        response.error = err;
      }
    
      return res.status(err.statusCode).json(response);
}

export default errorMiddleware;