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


  $scope.noMoreItemsAvailable = false;

  $scope.loadMore = function () {
      var _obj = angular.copy($scope.items[Math.floor(Math.random() * 56) + 1]);
      $scope.items.push({ id: $scope.items.length + 1, price: _obj.price, brand: _obj.brand, category: _obj.category, image: _obj.image, description: _obj.description });

      if ($scope.items.length == 70) {
          $scope.noMoreItemsAvailable = true;
      }
      $scope.$broadcast('scroll.infiniteScrollComplete');
  };


  $scope.items = [
{ id: 1, price: 500, brand: 'Wrangler', category: 'Mens TShirt', image: 'img/jeans.jpg', description: "Some description about the product" },
{ id: 2, price: 600, brand: 'Levis', category: 'Mens Jeans', image: 'img/Jeans1.jpg', description: "Some description about the product" },
{ id: 3, price: 800, brand: 'Pepe', category: 'Mens Formal Shirt', image: 'img/tshirt.jpg', description: "Some description about the product" },
{ id: 4, price: 1500, brand: 'Lee', category: 'Women Jeans', image: 'img/TShirt1.jpg', description: "Some description about the product" },
{ id: 5, price: 1500, brand: 'Parx', category: 'Mens Casual Shirt', image: 'img/TShirt2.jpg', description: "Some description about the product" },
{ id: 6, price: 200, brand: 'Cotton Country', category: 'Mens Cotton Shirt', image: 'img/TShirt3.jpg', description: "Some description about the product" },
{ id: 7, price: 2000, brand: 'Roadster', category: 'Mens Denims', image: 'img/tshirt.jpg', description: "Some description about the product" },
{ id: 8, price: 1800, brand: 'Wrogn', category: 'Mens Casual Shirts', image: 'img/TShirt4.jpg', description: "Some description about the product" },

{ id: 9, price: 500, brand: 'Wrangler', category: 'Mens TShirt', image: 'img/Shivam_1.jpg', description: "Some description about the product" },
{ id: 10, price: 600, brand: 'Levis', category: 'Womens Top', image: 'img/Shivam_2.jpg', description: "Some description about the product" },
{ id: 11, price: 800, brand: 'Pepe', category: 'Mens Black TShirt', image: 'img/Shivam_3.jpg', description: "Some description about the product" },
{ id: 12, price: 1500, brand: 'Lee', category: 'Mens Green Shirt', image: 'img/Shivam_4.jpg', description: "Some description about the product" },
{ id: 13, price: 1500, brand: 'Parx', category: 'Mens Casual Brown Shirt', image: 'img/Shivam_5.jpg', description: "Some description about the product" },
{ id: 14, price: 200, brand: 'Cotton Country', category: 'Mens Full Sleves TShirt', image: 'img/Shivam_6.jpg', description: "Some description about the product" },
{ id: 15, price: 2000, brand: 'Roadster', category: 'Mens Denims', image: 'img/Shivam_7.jpg', description: "Some description about the product" },
{ id: 16, price: 1800, brand: 'Wrogn', category: 'Mens Formal Blue Shirt', image: 'img/Shivam_8.jpg', description: "Some description about the product" },

{ id: 17, price: 500, brand: 'Wrangler', category: 'Mens Formal Maroon Shirt', image: 'img/Shivam_9.jpg', description: "Some description about the product" },
{ id: 18, price: 600, brand: 'Levis', category: 'Womens Off Shoulder TShirt', image: 'img/Shivam_10.jpg', description: "Some description about the product" },
{ id: 19, price: 800, brand: 'Pepe', category: 'Mens Blue Shirt', image: 'img/Shivam_11.jpg', description: "Some description about the product" },
{ id: 20, price: 1500, brand: 'Lee', category: 'Women Off Shoulder TShirt', image: 'img/Shivam_12.jpg', description: "Some description about the product" },
{ id: 21, price: 1500, brand: 'Parx', category: 'Womens Jeans Black', image: 'img/Shivam_13.jpg', description: "Some description about the product" },
{ id: 22, price: 200, brand: 'Cotton Country', category: 'Womens Black Off Shoulder Shirt', image: 'img/Shivam_14.jpg', description: "Some description about the product" },
{ id: 23, price: 2000, brand: 'Roadster', category: 'Womens Jump Suits', image: 'img/Shivam_15.jpg', description: "Some description about the product" },
{ id: 24, price: 1800, brand: 'Wrogn', category: 'Mens Jeans', image: 'img/Shivam_16.jpg', description: "Some description about the product" },

{ id: 25, price: 500, brand: 'Wrangler', category: 'Mens Checks Shirt', image: 'img/Shivam_17.jpg', description: "Some description about the product" },
{ id: 26, price: 600, brand: 'Levis', category: 'Mens Printed Shirt', image: 'img/Shivam_18.jpg', description: "Some description about the product" },
{ id: 27, price: 800, brand: 'Pepe', category: 'Womens Long Gown', image: 'img/Shivam_19.jpg', description: "Some description about the product" },
{ id: 28, price: 1500, brand: 'Lee', category: 'Women Cut Shoulder Maroon TShirt', image: 'img/Shivam_20.jpg', description: "Some description about the product" },
{ id: 30, price: 1500, brand: 'Parx', category: 'Womens Western Kurti', image: 'img/Shivam_21.jpg', description: "Some description about the product" },
{ id: 31, price: 200, brand: 'Cotton Country', category: 'Mens Cotton Digital Print Shirt', image: 'img/Shivam_22.jpg', description: "Some description about the product" },
{ id: 32, price: 2000, brand: 'Roadster', category: 'Womens Red Kurti', image: 'img/Shivam_23.jpg', description: "Some description about the product" },
{ id: 33, price: 1800, brand: 'Wrogn', category: 'Womens Plazzo', image: 'img/Shivam_24.jpg', description: "Some description about the product" },

{ id: 34, price: 500, brand: 'Wrangler', category: 'Womens Kurti', image: 'img/Shivam_25.jpg', description: "Some description about the product" },
{ id: 35, price: 600, brand: 'Levis', category: 'Mens Jeans', image: 'img/Shivam_26.jpg', description: "Some description about the product" },
{ id: 36, price: 800, brand: 'Pepe', category: 'Womens Zebra Print TShirt', image: 'img/Shivam_27.jpg', description: "Some description about the product" },
{ id: 37, price: 1500, brand: 'Lee', category: 'Mens Jeans', image: 'img/Shivam_28.jpg', description: "Some description about the product" },
{ id: 38, price: 1500, brand: 'Parx', category: 'Womens Kurti', image: 'img/Shivam_29.jpg', description: "Some description about the product" },
{ id: 39, price: 200, brand: 'Cotton Country', category: 'Womens Long Gown', image: 'img/Shivam_30.jpg', description: "Some description about the product" },
{ id: 40, price: 2000, brand: 'Roadster', category: 'Womens Jeans', image: 'img/Shivam_31.jpg', description: "Some description about the product" },
{ id: 41, price: 1800, brand: 'Wrogn', category: 'Womens Kurti', image: 'img/Shivam_32.jpg', description: "Some description about the product" },


{ id: 42, price: 500, brand: 'Wrangler', category: 'Womens Jeggings', image: 'img/Shivam_33.jpg', description: "Some description about the product" },
{ id: 43, price: 600, brand: 'Levis', category: 'Mens Jeans', image: 'img/Shivam_34.jpg', description: "Some description about the product" },
{ id: 44, price: 800, brand: 'Pepe', category: 'Mens Jeans Gray', image: 'img/Shivam_35.jpg', description: "Some description about the product" },
{ id: 45, price: 1500, brand: 'Lee', category: 'Mens TShirt', image: 'img/Shivam_36.jpg', description: "Some description about the product" },
{ id: 46, price: 1500, brand: 'Parx', category: 'Woemns Denims', image: 'img/Shivam_37.jpg', description: "Some description about the product" },
{ id: 47, price: 200, brand: 'Cotton Country', category: 'Womens Plazzo White', image: 'img/Shivam_38.jpg', description: "Some description about the product" },
{ id: 48, price: 2000, brand: 'Roadster', category: 'Womens Top', image: 'img/Shivam_39.jpg', description: "Some description about the product" },
{ id: 49, price: 1800, brand: 'Wrogn', category: 'Womens Top', image: 'img/Shivam_40.jpg', description: "Some description about the product" },


{ id: 50, price: 500, brand: 'Wrangler', category: 'Mens Red TShirt', image: 'img/Shivam_41.jpg', description: "Some description about the product" },
{ id: 51, price: 600, brand: 'Levis', category: 'Mens Zebra Print TShirt', image: 'img/Shivam_42.jpg', description: "Some description about the product" },
{ id: 52, price: 800, brand: 'Pepe', category: 'Mens Pink Tshirt', image: 'img/Shivam_43.jpg', description: "Some description about the product" },
{ id: 53, price: 1500, brand: 'Lee', category: 'Mens Casual Shirts', image: 'img/Shivam_44.jpg', description: "Some description about the product" },
{ id: 54, price: 1500, brand: 'Parx', category: 'Mens Casual Shirt', image: 'img/Shivam_45.jpg', description: "Some description about the product" },
{ id: 55, price: 200, brand: 'Cotton Country', category: 'Womens TShirt', image: 'img/Shivam_46.jpg', description: "Some description about the product" },
{ id: 56, price: 2000, brand: 'Roadster', category: 'Womens Denims', image: 'img/Shivam_47.jpg', description: "Some description about the product" },







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
      $ionicModal.fromTemplateUrl('views/sample/CheckOut.html', {
          scope: $scope,
          animation: 'slide-in-up'
      }).then(function (modal) {
          $scope.modal = modal;
          $scope.modal.show();
      });
    
  }

  $scope.CreditPayment = function () {
       $ionicLoading.show();
      PayPalMobile.renderSinglePaymentUI($scope.createPayment(), $scope.onSuccesfulPayment,
              $scope.onUserCanceled);
  }


  $scope.message = {
      'name': '',
      'email': '',
      'subject': '',
      'body': '',
      'PaymentType':1
  };

  $scope.finalSubmit = function () {



      $ionicLoading.show({ template: 'Submitting...', duration: 2000 })

      setTimeout(function () {
          $scope.cancelPreview();

          if ($scope.message.PaymentType == 1) {


              $ionicModal.fromTemplateUrl('views/sample/ThankYou.html', {
                  scope: $scope,
                  animation: 'slide-in-up'
              }).then(function (modal) {
                  $scope.modal = modal;
                  $scope.modal.show();
              });
          }
          else if ($scope.message.PaymentType == 2)
          {
              $scope.CreditPayment();
          }

          $scope.CartArray = [];
          $scope.cancelPreview();
      },2000)

  }



  $scope.initPaymentUI= function () {
        var clientIDs = {
            "PayPalEnvironmentProduction": "AYNVNaX0IKT9KaecXDRt4ogTqH3tiJ79FW1gyxFizySVIbR9AXf2SM471lyhLdgthXDK6v6ubfeiTXoY",
            "PayPalEnvironmentSandbox": "AfYpJEHq1xr7hf3LKTiDKMIWrN5uW_ZDSX5Yr60AfopGP8Ja-yJDnUPqSZKimYC89FWTj-H_XsdcRxDi"
        };
        
        PayPalMobile.init(clientIDs, $scope.onPayPalMobileInit);
  }

    $scope.onSuccesfulPayment=function (payment) {
        alert("payment success: " + JSON.stringify(payment, null, 4));
    }

    $scope.onAuthorizationCallback= function (authorization) {
        console.log("authorization: " + JSON.stringify(authorization, null, 4));
    }

    $scope.createPayment= function () {
        //var amount = $("#selectbasic").val();
        //alert(amount);
        // for simplicity use predefined amount
        var paymentDetails = [];
        var _total = 0;
        for (var i = 0; i < $scope.CartArray.length; i++) {
            paymentDetails.push(new PayPalPaymentDetails($scope.CartArray[i].price, "0", "0.00"));
            _total = _total + parseInt($scope.CartArray[i].price);

        }

        var payment = new PayPalPayment(_total, "Rs", "Shivam Products", "Sale",
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
            // single payment
            PayPalMobile.renderSinglePaymentUI($scope.createPayment(), $scope.onSuccesfulPayment,
               $scope.onUserCanceled);
        };

        buyInFutureBtn.onclick = function (e) {
            // future payment
            PayPalMobile.renderFuturePaymentUI($scope.onAuthorizationCallback, $scope
              .onUserCanceled);
        };

        profileSharingBtn.onclick = function (e) {
            // profile sharing
            PayPalMobile.renderProfileSharingUI(["profile", "email", "phone",
              "address", "futurepayments", "paypalattributes"
            ], $scope.onAuthorizationCallback, $scope.onUserCanceled);
        };
    }

    $scope.onPayPalMobileInit= function () {
        // must be called
        // use PayPalEnvironmentNoNetwork mode to get look and feel of the flow
        PayPalMobile.prepareToRender("PayPalEnvironmentSandbox", $scope.configuration(),
          $scope.onPrepareRender);
    }

    $scope.onUserCanceled= function (result) {
        alert(result);
    }

   $scope.addRZPEventListener= function () {
        document.getElementById('buyNowBtnRazor').addEventListener('click', function (event) {
            RazorpayCheckout.open(rzpOptions, successCallback, cancelCallback);
            event.preventDefault();
        });
    }

 //  $scope.initPaymentUI();
  
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

