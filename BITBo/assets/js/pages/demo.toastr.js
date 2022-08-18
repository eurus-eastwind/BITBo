! function (i) {
	"use strict";
	i("#toastr-one").on("click", function (t) {
		i.NotificationApp.send("Heads up!", "This alert needs your attention, but it is not super important.", "top-right", "rgba(0,0,0,0.2)", "info")
	}), i("#toastr-two").on("click", function (t) {
		i.NotificationApp.send("Heads up!", "Check below fields please.", "top-center", "rgba(0,0,0,0.2)", "warning")
	}), i("#toastr-three").on("click", function (t) {
		i.NotificationApp.send("Request approved successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-four").on("click", function (t) {
		i.NotificationApp.send("Request declined!", "", "top-right", "rgba(0,0,0,0.2)", "error")
	}), i("#toastr-five").on("click", function (t) {
		i.NotificationApp.send("User updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-five2").on("click", function (t) {
		i.NotificationApp.send("Brgy official updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-six").on("click", function (t) {
		i.NotificationApp.send("Blotter updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-resolve").on("click", function (t) {
		i.NotificationApp.send("Blotter marked as resolved!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-household").on("click", function (t) {
		i.NotificationApp.send("Household updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-deletecert").on("click", function (t) {
		i.NotificationApp.send("Certificate deleted!", "", "top-right", "rgba(0,0,0,0.2)", "error")
	}), i("#toastr-deletepay").on("click", function (t) {
		i.NotificationApp.send("Payment deleted!", "", "top-right", "rgba(0,0,0,0.2)", "error")
	}), i("#toastr-updatecert").on("click", function (t) {
		i.NotificationApp.send("Certificate updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-addcert").on("click", function (t) {
		i.NotificationApp.send("Certificate added successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-updateid").on("click", function (t) {
		i.NotificationApp.send("ID updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-generateid").on("click", function (t) {
		i.NotificationApp.send("ID is being generated...", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-updatedinvoice").on("click", function (t) {
		i.NotificationApp.send("Invoice updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-addpayment").on("click", function (t) {
		i.NotificationApp.send("Payment added successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-edittheme").on("click", function (t) {
		i.NotificationApp.send("Theme updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-editevent").on("click", function (t) {
		i.NotificationApp.send("Event updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-editproject").on("click", function (t) {
		i.NotificationApp.send("Project updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-editaccount").on("click", function (t) {
		i.NotificationApp.send("Account updated successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-createevent").on("click", function (t) {
		i.NotificationApp.send("Event / Project created successfully!", "", "top-right", "rgba(0,0,0,0.2)", "success")
	}), i("#toastr-deleteid").on("click", function (t) {
		i.NotificationApp.send("ID deleted!", "", "top-right", "rgba(0,0,0,0.2)", "error")
	}), i("#toastr-endterm").on("click", function (t) {
		i.NotificationApp.send("Barangay official was terminated!", "", "top-right", "rgba(0,0,0,0.2)", "error")
	}), i("#toastr-eight").on("click", function (t) {
		i.NotificationApp.send("", "Set the `showHideTransition` property to fade|plain|slide to achieve different transitions.", "top-right", "rgba(0,0,0,0.2)", "info", 3e3, 1, "fade")
	})
}(window.jQuery);