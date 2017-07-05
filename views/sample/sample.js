angular.module('App').controller('SampleCtrl', function ($scope, $ionicListDelegate, $ionicLoading, $ionicModal, $ionicPopup, MenuService) {

  $scope.Mylist =["First","Second","Third","Four","Five","Six","Sevem"] 
  $ionicLoading.show({
      template: '<span class="icon spin ion-loading-d"></span> Loading'
  });


  $scope.listview = true;


  $scope.groups = [
  { name: 'Bubbles', id: 1, items: [{ subName: 'SubBubbles1', subId: '1-1' }, { subName: 'SubBubbles2', subId: '1-2' }] },
  { name: 'Group1', id: 1, items: [{ subName: 'SubGrup1', subId: '1-1' }, { subName: 'SubGrup1', subId: '1-2' }] },
  { name: 'Group1', id: 1, items: [{ subName: 'SubGrup1', subId: '1-1' }, { subName: 'SubGrup1', subId: '1-2' }] },
  ];


  $scope.items = [
{ id: 1, price: 500, brand: 'Wrangler', category: 'Mens TShirt', image: 'img/jeans.jpg', description: "Some description about the product" },
{ id: 2, price: 600, brand: 'Levis', category: 'Mens Jeans', image: 'img/Jeans1.jpg', description: "Some description about the product" },
{ id: 3, price: 800, brand: 'Pepe', category: 'Mens Formal Shirt', image: 'img/tshirt.jpg', description: "Some description about the product" },
{ id: 4, price: 1500, brand: 'Lee', category: 'Women Jeans', image: 'img/TShirt1.jpg', description: "Some description about the product" },
{ id: 5, price: 1500, brand: 'Parx', category: 'Mens Casual Shirt', image: 'img/TShirt2.jpg', description: "Some description about the product" },
{ id: 6, price: 200, brand: 'Cotton Country', category: 'Mens Cotton Shirt', image: 'img/TShirt3.jpg', description: "Some description about the product" },
{ id: 7, price: 2000, brand: 'Roadster', category: 'Mens Denims', image: 'img/tshirt.jpg', description: "Some description about the product" },
{ id: 8, price: 1800, brand: 'Wrogn', category: 'Mens Casual Shirts', image: 'img/TShirt4.jpg', description: "Some description about the product" }
  ];


    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
  $scope.toggleGroup = function (group) {
      if ($scope.isGroupShown(group)) {
          $scope.shownGroup = null;
      } else {
          $scope.shownGroup = group;
      }
  };
  $scope.isGroupShown = function (group) {
      return $scope.shownGroup === group;
  };

  $scope.mycartlist = function () {
      $ionicModal.fromTemplateUrl('views/sample/mycartlist.html', {
          scope: $scope,
          animation: 'slide-in-up'
      }).then(function (modal) {
          $scope.modal = modal;
          $scope.modal.show();
      });
  }


  $scope.cancelPreview = function () {
      $scope.modal.hide();
  };

  $scope.previewObject = {};
  $scope.openPreview = function (item) {

      $scope.previewObject = item;
      $ionicModal.fromTemplateUrl('views/sample/detail.html', {
          scope: $scope,
          animation: 'slide-in-up'
      }).then(function (modal) {
          $scope.modal = modal;
          $scope.modal.show();
      });
  };

  $scope.CartArray = [];

    //Function to add element to the array
  $scope.sendOrder = function (item) {
      $scope.CartArray.push(item);
      $scope.modal.hide();
  };




    //Function to delete element from array
  $scope.DeteteFromCart = function (item) {

      debugger;
      for (var i = 0; i < $scope.CartArray.length ; i++) {
          if ($scope.CartArray[i].id == item.id) {
              $scope.CartArray.splice(i, 1);
          }
      }
  }



  setTimeout(function () {
      $ionicLoading.hide();
  }, 1000)


  $scope.checkout = function () {
      // $ionicLoading.show();
      PayPalMobile.renderSinglePaymentUI($scope.createPayment(), $scope.onSuccesfulPayment,
             $scope.onUserCanceled);
  }


  $scope.message = {
      'name': '',
      'email': '',
      'subject': '',
      'body': ''
  };

  $scope.finalSubmit = function () {
      $ionicLoading.show({ template: 'Submitting...', duration: 2000 })
  }



  $scope.initPaymentUI= function () {
        var clientIDs = {
            "PayPalEnvironmentProduction": "AYNVNaX0IKT9KaecXDRt4ogTqH3tiJ79FW1gyxFizySVIbR9AXf2SM471lyhLdgthXDK6v6ubfeiTXoY",
            "PayPalEnvironmentSandbox": "AfYpJEHq1xr7hf3LKTiDKMIWrN5uW_ZDSX5Yr60AfopGP8Ja-yJDnUPqSZKimYC89FWTj-H_XsdcRxDi"
        };
        
        PayPalMobile.init(clientIDs, app.onPayPalMobileInit);
        alert("payment plugin initialized");
  }

    $scope.onSuccesfulPayment=function (payment) {
        alert("payment success: " + JSON.stringify(payment, null, 4));
    }

    $scope.onAuthorizationCallback= function (authorization) {
        console.log("authorization: " + JSON.stringify(authorization, null, 4));
    }

    $scope.createPayment= function () {
        var amount = $("#selectbasic").val();
        alert(amount);
        // for simplicity use predefined amount
        var paymentDetails = new PayPalPaymentDetails(amount, "0.00", "0.00");
        var payment = new PayPalPayment(amount, "USD", "Awesome Sauce", "Sale",
          paymentDetails);
        return payment;
    }

    $scope.configuration= function () {
        // for more options see `paypal-mobile-js-helper.js`
        var config = new PayPalConfiguration({
            merchantName: "My test shop",
            merchantPrivacyPolicyURL: "https://mytestshop.com/policy",
            merchantUserAgreementURL: "https://mytestshop.com/agreement"
        });
        return config;
    }

    $scope.onPrepareRender= function () {
        // buttons defined in index.html
        //  <button id="buyNowBtn"> Buy Now !</button>
        //  <button id="buyInFutureBtn"> Pay in Future !</button>
        //  <button id="profileSharingBtn"> ProfileSharing !</button>
        var buyNowBtn = document.getElementById("buyNowBtn");
        var buyInFutureBtn = document.getElementById("buyInFutureBtn");
        var profileSharingBtn = document.getElementById("profileSharingBtn");

        buyNowBtn.onclick = function (e) {
            alert(" I m here");
            // single payment
          
        };

        buyInFutureBtn.onclick = function (e) {
            // future payment
            PayPalMobile.renderFuturePaymentUI(app.onAuthorizationCallback, app
              .onUserCanceled);
        };

        profileSharingBtn.onclick = function (e) {
            // profile sharing
            PayPalMobile.renderProfileSharingUI(["profile", "email", "phone",
              "address", "futurepayments", "paypalattributes"
            ], app.onAuthorizationCallback, app.onUserCanceled);
        };
    }

    $scope.onPayPalMobileInit= function () {
        // must be called
        // use PayPalEnvironmentNoNetwork mode to get look and feel of the flow
        PayPalMobile.prepareToRender("PayPalEnvironmentSandbox", app.configuration(),
          app.onPrepareRender);
    }

    $scope.onUserCanceled= function (result) {
        alert(result);
    }

   $scope.addRZPEventListener= function () {
        document.getElementById('buyNowBtnRazor').addEventListener('click', function (event) {
            alert("I am in ");
            RazorpayCheckout.open(rzpOptions, successCallback, cancelCallback);
            event.preventDefault();
        });
    }

   $scope.initPaymentUI();
  
}).directive('formManager', function ($ionicLoading) {
    return {
        restrict: 'A',
        controller: function ($scope) {

            $scope.$watch('faleComigoForm.$valid', function () {
                console.log("Form validity changed. Now : " + $scope.faleComigoForm.$valid);
            });

            $scope.submit = function () {

                if ($scope.faleComigoForm.$valid) {
                    $scope.finalSubmit();
                } else {
                    $ionicLoading.show({ template: 'Form Is Not Valid', duration: 1500 })
                }
            }
        }
    }
})

angular.module('ionicApp', ['ionic'])

