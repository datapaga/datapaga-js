
<p align="center">
  <img width="460" src="https://github.com/datapaga/datapaga-js/blob/master/Example/assets/img/logo.png">

  </hr>
</p>



# JS DataPaga Library

A Javascript library for the DataPaga API


### Prerequisites

What things you need to install the software and how to install them

```
jQuery
```

### Installing

add the file to the directory of your project, example:

```
assets\js\datapagalib.js

assets\js\datapagalib.min.js
```

### Example of Library 

* [Example Datapaga API](https://toolboxsv.com/dev/appdatapaga/).

## How to use.

### Get list transaction.

</hr>

#### Params.

```

	var params = {
            "account_movement": {
            "api_key": "API_KEY",//API KEY get in your Dashboard
            "api_secret": "API SECRET",//API SECRET get in your Dashboard
            "start_date": "2017-01-01",
            "end_date": "2017-12-01",
            "page": "1"}
        }

```
#### Function. 

```
	datapagalib._get_list_transaction(JSON.stringify(datas)).then((result)=>{ 
			// get result here
	});

```		
#### Response.

```
	console.log(result)

	*succes

	[
	  {
	    "uuid": null,
	    "confirmation_number": "DP20170920001900655",
	    "total_amount": "$100.00",
	    "client_email": null,
	    "payment_status": "APPROVED",
	    "description": "APPROVED",
	    "created_date": "2017-09-26"
	  }
	]

```
### Refund.

#### Params.

```

	var params = {
            "refund": {            
                "api_secret": "API SECRET",//API SECRET get in your Dashboard
                "confirmation_number": "DP20170920034327399",//API KEY get in your Dasboard
                "refund_description":"El producto es de muy mala calidad",
                "ip_customer": "127.0.0.1"}
        }

```
#### Function. 

```
	datapagalib._get_refund(JSON.stringify(datas)).then((result)=>{ 
			// get result here
	});

```		
#### Response.

```
	console.log(result)

	*succes

	{
	  "uuid": "cd_83e7ab7189bc3433f68b",
	  "balance": "000000000011061"
	}

```

### Account movement.

</hr>

#### Params.

```

	var params = {
            "account_movement": {
            "first_name": "Marco Aurelio",
            "last_name": "mendoza",
            "web_site_url": "www.datapaga.com",
            "phone": "768474673",
            "country": "SV",
            "city": "San Salvador ",
            "email": "rickymorty@gmail.com",
            "api_key": "API_KEY",//API KEY get in your Dashboard
            "api_secret": "API SECRET",//API SECRET get in your Dashboard
            "customer_ip": "192.168.0.1",
            "region": "CA",
            "zip": "0001",
            "street": "123 MAIN STREETR",
            "total_amount": "1",
            "product_description": "Molino para te",
            "card_holder_name": "John Smith",
            "card_number": "4111111111111111",
            "card_expire_month": "01",
            "card_expire_year": "23",
            "card_type": "VI",
            "card_security_code": "123" }
        }

```
#### Function. 

```
	datapagalib._get_account_movements(JSON.stringify(datas)).then((result)=>{ 
			// get result here
	});

```		
#### Response.

```
	console.log(result)

	*succes

	*error

	{
	  "status": 404,
	  "error": "Not Found"
	}

```


### Get card list.

</hr>

#### Params.

```

	var params = {
            "card": {            
            "api_secret": "API SECRET",//API SECRET get in your Dashboard
        	}
        }

```
#### Function. 

```

	datapagalib._get_list_card(JSON.stringify(datas),uuid_card).then((result)=>{ 
			// get result here
	});

```		
#### Response.

```
	console.log(result)
	
	*succes

	{
	  "response": [
	    {
	      "uuid": "cd_f012d2a52e1eb118e89f",
	      "status": "Active",
	      "expiration_date": "2005",
	      "emboss_name": "LAMDA CARD 00057",
	      "card_number": "0944",
	      "order_status": "live",
	      "card_id": "6288",
	      "card_default": false,
	      "balance": "0",
	      "description": "Mi primera Tarjeta DataPaga",
	      "type_of_transfer": null,
	      "days": null,
	      "suspended": true
	    }
	  ],
	  "current_page": 1,
	  "next_page": null,
	  "prev_page": null,
	  "total_pages": 1,
	  "total_count": 3
	}

```

### Get card detail.

</hr>

#### Params.

```

	var params = {
            "card": {            
            "api_secret": "API SECRET",//API SECRET get in your Dashboard
        	}
        }

```
#### Function. 

```

	datapagalib._get_card_detail(JSON.stringify(datas)).then((result)=>{ 
			// get result here
	});

```		
#### Response.

```
	console.log(result)

	*succes

	{
	  "uuid": "cd_83e7ab7189bc3433f68b",
	  "balance": "000000000011061"
	}

```
### Get balance.

</hr>

#### Params.

```

	var params = {
            "store": {            
            "api_secret": "API SECRET",//API SECRET get in your Dashboard
        	}
        }

```
#### Function. 

```
	datapagalib._get_balance(JSON.stringify(datas)).then((result)=>{ 
			// get result here
	});

```		
#### Response.

```
	console.log(result)

	*succes

	{
	  "uuid": "cd_83e7ab7189bc3433f68b",
	  "balance": "000000000011061"
	}

```


## Version

DataPaga Library v0.2. 

## Author

* **DataPaga** 

