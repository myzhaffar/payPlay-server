module.exports = {
    isLoginAdmin: (req, res, next) => {
        if (req.session.user === null || req.session.user === undefined) {
            req.flash("alertMessage", "Maaf sesi Anda telah berakhir, silakan login kembali");
            req.flash("alertStatus", "danger");
            res.redirect("/");
        } else {
            next()
        }
    }
}
