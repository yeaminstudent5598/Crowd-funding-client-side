import { tostMessage } from '../Utility/toastMassage';

const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('Cart-List');
    if (storedListStr) {
      const storedList = JSON.parse(storedListStr);
      return storedList;
    }
    return [];
  };
  
  // Function to add a product to the Cart List
  const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    
    
    if (storedList.includes(id)) {
      console.log(id, 'already exists in Cart'); 
       
    }
  
    
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('Cart-List', storedListStr);
  };
  
  // Function to get the current Wish List from localStorage
  const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('Wish-List');
    if (storedListStr) {
      const storedList = JSON.parse(storedListStr);
      return storedList;
      
    }
    return [];
    
    
  };
  
  
  const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    
    
    if (storedList.includes(id)) {
      console.log(id, 'already exists in Wish List'); 
     return tostMessage("Product  already to Wish", "error");
    }
  
    
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('Wish-List', storedListStr);
    tostMessage("Product  added to Wish", "success");
  };
  
  export { addToStoredCartList, getStoredCartList, getStoredWishList, addToStoredWishList };
  