# omgBarcode

This project was built as one part coding challenge, one part learning React Native

## Problem

Create a bar code scanning application in React Native, that scans a bar code and returns a success message if it finds the item in an external database, or an error message otherwise.

Also create a web endpoint for users to add items, as well as an API endpoint for querying a list of items.

## Implementation

### Rails Web Endpoint

[LIVE!](http://omgbarcode.herokuapp.com)

The web endpoint is very simple, just two pages. Users are greeted with a splash screen, where they can either go to the `New Item Page` or the `GitHub` page here.

![Splash][splash]

Finally, the create an item page is a simple HTML Form, where users can create a new item. Submitting this form makes a post request to the server, and appropriate messages are displayed on successes / errors.

![New Item Page][newItem]

[splash]: docs/screenshots/splash.png
[newItem]: docs/screenshots/newItem.png

#### Endpoint Routes
```
Prefix      Verb      URI Pattern             Controller#Action
api_items   GET    /api/items(.:format)   api/items#index {:format=>:json}
items       POST   /items(.:format)       items#create
new_item    GET    /items/new(.:format)   items#new
root        GET    /                      static_pages#show
```

#### DB Schema

Items are stored in a PostgreSQL database on the backend. With the following schema:

```
# Table name: items
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  upc        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
```

### Sample JSON

```JSON
[
  {
    "product_name":"Lacroix Tangerine",
    "upc":"24463061163"
  },
  {
    "product_name":"ABC Sparkling water",
    "upc":"52000328660"
  },
  {
    "product_name":"Luke's cheddar chips",
    "upc":"84114112729"
  }
]
```

### ReactNative App

The mobile app is located in [/frontend](./frontend/barcodeScanner). It makes use of the `react-native-camera` [package](https://github.com/lwansbrough/react-native-camera).

#### Structure

The mobile application is constructed out of one `ScannerContainer` React Component, which returns two JSX objects depending on the current value of `displayCamera` in the application store.

![Moble Splash Page][mobileSplash]

The camera starts hidden, and can be brought up by hitting the `Start Scanner` button. The camera can be hidden again with the `close` button.

![Mobile Scanner][mobileScanner]

[mobileSplash]: docs/screenshots/mobileSplash.png
[mobileScanner]: docs/screenshots/mobileScanner.png

#### API Communication

When the scanner initializes, it dispatches a `requestItems` action, which uses the `Fetch API` to query the API Endpoint discussed above.

When a response is received, it runs it's success callback which JSONifys the response, and dispatches a `receiveItems` action to update the application store.

The `requestItems` action is handled by the `ItemMiddleware`, while the `receiveItems` action is handled by the `ItemReducer`.

```JavaScript
// item_util.js
export const fetchItems = (success, error) => {
  return fetch('http://omgbarcode.herokuapp.com/api/items')
    .then(response => response.json())
    .then(response => success(response))
    .catch(err => error(err));
};

// item_actions.js
export const requestItems = () => ({
  type: REQUEST_ITEMS
});

export const receiveItems = items => ({
  type: RECEIVE_ITEMS,
  items
});

// item_middleware.js
const ItemMiddleware = ({getState, dispatch}) => next => action => {
  const fetchItemsSuccess = items => dispatch(receiveItems(items));
  const fetchItemsError = error => console.log(error);

  switch (action.type) {
    case REQUEST_ITEMS:
      fetchItems(fetchItemsSuccess, fetchItemsError);
      return next(action);
    default:
      return next(action);
  }
};

// item_reducer.js
const ItemReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items;
    default:
      return state;
  }
};
```
