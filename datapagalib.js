/*=====================================================
*
*   _ : Datapaga library JavaScript 
*   (c) Techlatam
*
======================================================*/
/**
 * [url from project ]
 * @type {String}
 */
const url = "https://datapaga.herokuapp.com/v1";
const url_stagin = "https://datapaga-staging.herokuapp.com/v1";
var Glob_balance = '';
   var ajaxresponse = 'befor';
/**
 * [Secret description]
 * @type {String}
 */
/**
 * [Authorization description]
 * @type {String}
 */
var Authorization = encode("Bearer 865b0937144bcb09fd77e75b52b76af866d3747becda7a234ca7b768e660af29");
/**
 * [datapagalib description]
 * @type {Object}
 */
var datapagalib = {
    /**
     *  
     * @param  {[type]} datas [description]
     * @return {[type]}       [description]
     */
    _get_list_transaction: function(datas) {
        var result;
        result = _result(datas,'history_transaction','none',0).then((result) => {
           return result;
        });
        return result;
    },
    _get_charge: function(datas) {
        var result;
        result = _result(datas,'charge','none',0).then((result) => {
           return result;
        });
        return result;
    },
    _get_list_card:function(datas){        
        var result;
        result = _result(datas,'card_list','none',0).then((result) => {
           return result;
        });
        return result;
    },    
    _get_card_detail:function(datas,uuid_card){        
        var result;
        result = _result(datas,'card_detail',uuid_card,0).then((result) => {
           return result;
        });
        return result;
    },
    _get_balance:function(datas){
        var result;
        result = _result(datas,'balance','none',0).then((result) => {
           return result;
        });
        return result;
    },
    _get_refund:function(datas,uuid_card){
        var result;
        result = _result(datas,'refund',uuid_card,0).then((result) => {
           return result;
        });
        return result;
    }
}
/**
 *  
 * @param  {[type]} values    [description]
 * @param  {[type]} modul     [description]
 * @param  {[type]} uuid_card [description]
 * @param  {[type]} page      [description]
 * @return {[type]}           [description]
 */
function _result(values,modul,uuid_card,page) { 

    let url;

    switch(modul){
        case 'history_transaction': 
            url = url_stagin + '/account_movements/transaction_history/';
        break;
        case 'charge':
             url = url_stagin + '/account_movements/charge';
        break;
        case 'card_list':
            url = url_stagin + '/cards/list?page='+page;
        break;
        case 'card_detail':
             url =  url_stagin + '/cards/detail/' + uuid_card;
        break;
        case 'balance':
            url = url_stagin + '/stores/balance';
        break;
        case 'refund':
            url = url_stagin + '/account_movements/refund/'+uuid_card;
        break;
        return value;
    }


    return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('Post', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.setRequestHeader('Accept', 'application/json, text/javascript');
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader('Authorization', decode(Authorization));
    req.send(values);
  }); 
}

