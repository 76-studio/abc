/* eslint-disable vue/valid-template-root */
<style scoped>
@import "C:/xampp/htdocs/11Shkun/src/assets/css/shkunform.css";
</style>

<template>

    <div class="vx-card p-6" style="" >
     <!--UPDATE START-->
      <table width="100%" border="0" class="tables">
     <tr>
      <td width="25%">
        
      </td>
       <td width="50%"><center><h1>Sale 1<br><h4><font color="blue">View</font></h4></h1></center></td>
       <td width="25%"  align="right">Today 25-10-2020 <br> Thursday
           
                
              
        </td>
         

      </tr>
     
     
    
      </table>

         
    <!--UPDATE END-->
  
    <table border="0" width="100%" class="tables">
      
        <tr>
            <td width="30%" align="left">
                <table border="0" class="tables" align="left">
                <tr>
                <td>
                Date 
                </td>
                <td>
                 <vs-input type="date" class="w-full"  size="small" v-model="mydate"/>
                </td>
                
                </tr>
                <tr>
                  <td>

        
                 
                <div class="vx-col sm:w-1/3 w-full">
                    <span><p>B.No</p></span>
                </div>
                </td>
                <td>
                
                     <vs-input class="w-full" size="small" v-model="input1" />
                
                </td>
                
                
                </tr>
                </table>


            </td>
            
           
            <td width="20%"></td>
        <td width="50%"  align="right">
           
                
              <div align="right">
       <div class="right" align="right">
        <button class="btn"><i class="fa fa-cog"></i></button>
        &nbsp;
        <button class="btn"><i class="fa fa-bars"></i></button>
        
         </div>
        </div>
            </td>
        </tr>
        
    </table>


   
<br>

	<div id="page-wrap">

		<div id="left">
      <table border="0" width="100%" cellspacing="5" class="tables">
        <tr>
          <td>Cust. Name</td>
          <td><vs-input class="w-full" size="small" v-model="input1" /></td>
        </tr>
        <tr>
          <td>City</td>
          <td><vs-input class="w-full" size="small" v-model="input1" /></td>
        </tr>
        <tr>
          <td>GST No.</td>
          <td><vs-input class="w-full" size="small" v-model="input1" /></td>
        </tr>
        <tr>
          <td>PAN</td>
          <td><vs-input class="w-full" size="small" v-model="input1" /></td>
        </tr>
      </table>
    </div>
		
		<div id="rightt">
      <table border="0" width="100%" cellspacing="5" class="tables">
        <tr>
          <td>GR. No</td>
          <td><vs-input class="w-full" size="small" v-model="input1" /></td>
        </tr>
        <tr>
          <td>Terms</td>
          <td><vs-input class="w-full" size="small" v-model="input1" /></td>
        </tr>
        <tr>
          <td>Vehicle</td>
          <td><vs-input class="w-full" size="small" v-model="input1" /></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="checkbox">Late Payment Alert</td>
        </tr>
      </table>
    </div>
			
        <div id="mid">
          <table border="0" width="100%" cellspacing="5"  class="tables">
        <tr>
          <td>Tax Type</td>
          <td>
             <select class="w-full selectp">
            <option value=""></option>
          </select>
       
          </td>
        </tr>
        <tr>
          <td>Bill CASH</td>
          <td>
             <select class="w-full selectp">
            <option value=""></option>
          </select>
       
          </td>
        </tr>
        <tr>
          <td>Mfg. TDF</td>
          <td>

            <select class="w-full selectp">
            <option value=""></option>
          </select>
       
          </td>
        </tr>
        
      </table>
        </div>
       
		<div style="clear:both;"></div>
	</div>

 
    
    
    







<div style="overflow-x:auto;">  
<table id="customers">
  <tr>
    <th>Product Name</th>
    <th>Description</th>
    <th>Pcs</th>
    <th>Qty</th>
    <th>Rate</th>
    <th>Amount</th>
    <th>Dis@</th>
    <th>Discount</th>
    <th>Tax@</th>
    <th>C. Gst</th>
    <th>S. Gst</th>
    <th>I. Gst</th>
  </tr>
  <tr>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    
  </tr>
  <tr>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    
  </tr>
  <tr>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    
  </tr>
  <tr>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    
  </tr>
  <tr>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    
  </tr>
  <tr>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    <td><vs-input class="w-full" size="small" v-model="input1" /></td>
    
  </tr>
  
</table>



    </div>
       
      <div id="example">
        <!--IMPORT THE SCRIPT FOR ADDING ROWS AND USE THIS BUTTON-->
      <!--<button v-on:click="add_row">Add Row</button>-->
      
      <button class="btn"><i class="fa fa-plus"></i></button>

    </div> 




    <div id="page-wrap">
    <div id="lefts">

    <table border="0"  cellspacing="1" class="tables">
      <tr>
        <td>Shipped</td>
        <td><vs-input class="w-full" size="small" v-model="input1" /></td>
      </tr>
      <tr>
        <td>Broker</td>
        <td><vs-input class="w-full" size="small" v-model="input1" /></td>
      </tr>
      <tr>
        <td>Remarks</td>
        <td><vs-input class="w-full" size="small" v-model="input1" /></td>
      </tr>
      <tr>
        <td>Transport</td>
        <td><vs-input class="w-full" size="small" v-model="input1" /></td>
      </tr>
      <tr>
        <td>Adjust Advance Rs.</td>
        <td><vs-input class="w-full" size="small" v-model="input1" /></td>
      </tr>
      <tr>
        <td>Date</td>
        <td><vs-input type="date" class="w-full"  size="small" v-model="mydate" /></td>
      </tr>
    </table>
    </div>
    <div id="rights">
      <table border="0" cellspacing="1"  class="tables" >
      <tr>
        <td>Value</td>
        <td><vs-input class="w-full" size="small" v-model="input1" /></td>
      </tr>
      <tr>
        <td>Expenses</td>
        <td><vs-input class="w-full" size="small" v-model="input1" /></td>
      </tr>
      <tr>
        <td>Taxes</td>
        <td><vs-input class="w-full" size="small" v-model="input1" /></td>
      </tr>
      <tr>
        <td>Expenses</td>
        <td><vs-input class="w-full" size="small" v-model="input1" /></td>
      </tr>
      <tr>
        <td>G. Total</td>
        <td><vs-input class="w-full" size="small" v-model="input1" /></td>
      </tr>
     
    </table>
    </div>
    </div>




    
      <!--
      <table width="100%">
      <tr>
        <td width="80%"></td>
        <td width="10%">
      
        <vs-button  color="primary" type="filled">Print</vs-button>
        
      </td>
      <td  width="10%">
        <vs-button  color="primary" type="filled" style="!">Submit</vs-button>
      </td>
      </tr>
      </table>
      -->
      <div align="right" style="padding-top: 170px">
        <br>

      <div class="right" align="right">
        <br>
        <vs-button  color="primary" type="filled">Print</vs-button>
        &nbsp;
        <vs-button  color="primary" type="filled" style="!">Submit</vs-button>
        

      </div>
      </div>
      
      
      
    </div>

    </form>
</template>






