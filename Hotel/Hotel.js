window.onload = () =>
    {
        /************************************************************************************************************************** */
        const headers = document.querySelector(".inspiration-headers");
        const headersItems = document.querySelectorAll(".inspiration-headers-item");
        
        let itema;
        
        headers.addEventListener("click", function(e){
           const target = e.target;
           headersItems.forEach((item) => 
            {
                if(item.classList.contains("inspiration-headers-active"))
                {
                   itema = item;
                }
            })
            if(target.classList.contains("inspiration-headers-item"))
            {
                target.classList.toggle("inspiration-headers-active");
                itema.classList.toggle("inspiration-headers-active");
            }
    
    
            //** INSPIRATION HEADER ITEMS* */
            let b11 = document.querySelector(".b1-1");
            let p11 = document.querySelector(".p1-1");
            let b12 = document.querySelector(".b1-2");
            let p12 = document.querySelector(".p1-2");
            let b13 = document.querySelector(".b1-3");
            let p13 = document.querySelector(".p1-3");
    
            let b21 = document.querySelector(".b2-1");
            let p21 = document.querySelector(".p2-1");
            let b22 = document.querySelector(".b2-2");
            let p22 = document.querySelector(".p2-2");
            let b23 = document.querySelector(".b2-3");
            let p23 = document.querySelector(".p2-3");
    
            let b31 = document.querySelector(".b3-1");
            let p31 = document.querySelector(".p3-1");
            let b32 = document.querySelector(".b3-2");
            let p32 = document.querySelector(".p3-2");
            let b33 = document.querySelector(".b3-3");
            let p33 = document.querySelector(".p3-3");
    
            let b41 = document.querySelector(".b4-1");
            let p41 = document.querySelector(".p4-1");
            let b42 = document.querySelector(".b4-2");
            let p42 = document.querySelector(".p4-2");
    
            //** LAKE DESTINATIONS*/ 
            if(target.innerHTML == "Lake Destinations")
            {
               b11.innerHTML = "Adirondack";
               p11.innerHTML = "New York";
               b12.innerHTML = "Balsam Lake";
               p12.innerHTML = "Wisconsin";
               b13.innerHTML = "Buckhorn";
               p13.innerHTML = "Ontario";
    
               b21.innerHTML = "Algonquin";
               p21.innerHTML = "Ontario";
               b22.innerHTML = "Bancroft";
               p22.innerHTML = "Ontario";
               b23.innerHTML = "Clear Lake";
               p23.innerHTML = "Ontario";
    
               b31.innerHTML = "Austin";
               p31.innerHTML = "Texas";
               b32.innerHTML = "Banff";
               p32.innerHTML = "Alberta";
               b33.innerHTML = "Cultus Lake";
               p33.innerHTML = "British Columbia";
    
               b41.innerHTML = "Bala";
               p41.innerHTML = "Ontario";
               b42.innerHTML = "Bracebridge";
               p42.innerHTML = "Ontario";
            }
    
            //** MOUNTAIN DESTINATIONS*/ 
            if(target.innerHTML == "Mountain Destinations")
            {
               b11.innerHTML = "Blue Mountain";
               p11.innerHTML = "Ontario";
               b12.innerHTML = "Gatineau";
               p12.innerHTML = "Quebec";
               b13.innerHTML = "Leavenworth";
               p13.innerHTML = "Washington";
    
               b21.innerHTML = "Collingwood";
               p21.innerHTML = "Ontario";
               b22.innerHTML = "Hope";
               p22.innerHTML = "British Columbia";
               b23.innerHTML = "Mesa";
               p23.innerHTML = "Arizona";
    
               b31.innerHTML = "Denver";
               p31.innerHTML = "Colorado";
               b32.innerHTML = "Ivermere";
               p32.innerHTML = "British Columbia";
               b33.innerHTML = "Mont-Tremblant";
               p33.innerHTML = "Quebec";
    
               b41.innerHTML = "Fernie";
               p41.innerHTML = "British Columbia";
               b42.innerHTML = "Kimberley";
               p42.innerHTML = "British Columbia";
            }
    
            //** COASTAL DESTINATIONS*/ 
            if(target.innerHTML == "Coastal Destinations")
            {
               b11.innerHTML = "Allenwood Beach";
               p11.innerHTML = "Ontario";
               b12.innerHTML = "Brackley Beach";
               p12.innerHTML = "Prince Edward Island";
               b13.innerHTML = "Chelem";
               p13.innerHTML = "Yucatan";
    
               b21.innerHTML = "Anaheim";
               p21.innerHTML = "California";
               b22.innerHTML = "Bradenton";
               p22.innerHTML = "Florida";
               b23.innerHTML = "Clearwater";
               p23.innerHTML = "Florida";
    
               b31.innerHTML = "Balm Beach";
               p31.innerHTML = "Ontario";
               b32.innerHTML = "Cape Coral";
               p32.innerHTML = "Florida";
               b33.innerHTML = "Cocoa Beach";
               p33.innerHTML = "Florida";
    
               b41.innerHTML = "Barra de Navidad";
               p41.innerHTML = "Jalisco";
               b42.innerHTML = "Cape May";
               p42.innerHTML = "New Jersey";
            }
    
            //** ISLAND DESTINATIONS*/ 
            if(target.innerHTML == "Island Destinations")
            {
               b11.innerHTML = "Bayfield";
               p11.innerHTML = "Wisconsin";
               b12.innerHTML = "Charleston";
               p12.innerHTML = "South Carolina";
               b13.innerHTML = "Dunedin";
               p13.innerHTML = "Florida";
    
               b21.innerHTML = "Bowen Island";
               p21.innerHTML = "British Columbia";
               b22.innerHTML = "Charlottetown";
               p22.innerHTML = "Prince Edward Island";
               b23.innerHTML = "Galiano Island";
               p23.innerHTML = "British Columbia";
    
               b31.innerHTML = "Calgary";
               p31.innerHTML = "Alberta";
               b32.innerHTML = "Cordova Bay";
               p32.innerHTML = "British Columbia";
               b33.innerHTML = "Gananoque";
               p33.innerHTML = "Ontario";
    
               b41.innerHTML = "Campell River";
               p41.innerHTML = "British Columbia";
               b42.innerHTML = "Digby";
               p42.innerHTML = "Nova Scotia";
            }
    
            //** OUTDOOR DESTINATIONS*/ 
            if(target.innerHTML.includes("Outdoor Destinations"))
            {
               b11.innerHTML = "Birch Bay";
               p11.innerHTML = "Washington";
               b12.innerHTML = "Golden";
               p12.innerHTML = "British Columbia";
               b13.innerHTML = "Turkey Point";
               p13.innerHTML = "Ontario";
    
               b21.innerHTML = "Chéticamp";
               p21.innerHTML = "Nova Scotia";
               b22.innerHTML = "Killarney";
               p22.innerHTML = "Ontario";
               b23.innerHTML = "Waterton Park";
               p23.innerHTML = "Alberta";
    
               b31.innerHTML = "Wasagaming";
               p31.innerHTML = "Manitoba";
               b32.innerHTML = "Niagara Falls";
               p32.innerHTML = "Ontario";
               b33.innerHTML = "";
               p33.innerHTML = "";
    
               b41.innerHTML = "Disney";
               p41.innerHTML = "Oklahoma";
               b42.innerHTML = "Palm Springs";
               p42.innerHTML = "California";
            }
    
            //** OTHER POPULAR DESTINATIONS*/ 
            if(target.innerHTML == "Other Popular Destinations")
            {
               b11.innerHTML = "Amsterdam";
               p11.innerHTML = "North Holland";
               b12.innerHTML = "The Blue Mountains";
               p12.innerHTML = "Ontario";
               b13.innerHTML = "Cancún";
               p13.innerHTML = "Quintana Roo";
    
               b21.innerHTML = "Barcelona";
               p21.innerHTML = "Catalonia";
               b22.innerHTML = "Boston";
               p22.innerHTML = "Massachusetts";
               b23.innerHTML = "Chicago";
               p23.innerHTML = "Illinois";
    
               b31.innerHTML = "Barrie";
               p31.innerHTML = "Ontario";
               b32.innerHTML = "Calabogie";
               p32.innerHTML = "Ontario";
               b33.innerHTML = "Cobourg";
               p33.innerHTML = "Ontario";
    
               b41.innerHTML = "Barry's Bay";
               p41.innerHTML = "Ontario";
               b42.innerHTML = "Sault Ste. Marie";
               p42.innerHTML = "Ontario";
            }        
            
        })
    
    
    }