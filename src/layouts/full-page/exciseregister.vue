/* eslint-disable vue/valid-template-root */
<style>
.overlap
{
    
    max-width: 150px;
    max-height: 150px;
    overflow: hidden;
   
}
</style>
<style>
#page-wraps {
   
    width: 100%;
    position: relative;
    

}

#center {
    
    width: 100%;
    height: auto;
   
    float: center;
    padding-right: 9%;
   
    
    
}

#rights {
    width: 50%;
    height: auto;
    float: left;
   
    padding-left: 9%;
  
}

</style>
<style>
#page-wrap {
   
    width: 100%;
    margin: 40px auto;
    position: relative;
    

}

#left {
    
    width: 33%;
    height: auto;
   
    float: left;
    padding-right: 8%;
    
    
}

#mid {
    width: 33%;
    height: auto;
    float: left;
   
    padding-left: 8%;
  
}

#rightt {
    
    width: 34%;
    height: auto;
    float: left;
    padding-right: 2.5%;
    padding-left: 2.5%;
}
</style>
<style>

.selectp
{
  border-color: #7367f0;
  background-color:White;
}

.btn {
  background-color: #7367f0;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  
  cursor: pointer;
  border-radius: 12px;




}

/* Darker background on mouse-over */
.btn:hover {
  background-color: RoyalBlue;
}
</style>

<style>
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  
}

#customers td, #customers th {
  border: 1px solid #ddd;
  
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #7367f0;
  color: white;
}
</style>
<style>

.right {
  position: static;
  right: 0px;
  
  padding: 10px;
  
   width: 100%;
   min-width: 10px;  
   max-width: 300px;

}
</style>

<style type="text/css">


@media screen and (min-width: 601px) {
  div.example {
    font-size: 15px;
    background-color:white; 
    padding: 55px;
    
    border-color: #7367f0;
     border-top-style: solid;
     border-bottom-style: solid;
  }
}

@media screen and (max-width: 600px) {
  div.example {
    font-size: 10px;
    background-color:white; 
    padding: 10px;
    
    border-color: #7367f0;
    border-top-style: solid;
    border-bottom-style: solid;
  }
  
}

.btns {
   width: 100%;
   min-width: 10px;  
   max-width: 300px; 
}
</style>
<style type="text/css">
  #middlecol {
   
    width: 100%;
    
  
  }

 
  .tables 
{
    table-layout:fixed;
    width:100%;  
}

.users {
  table-layout: fixed;
  white-space: nowrap;
}
.users td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Column widths are based on these cells */
.rowid {
  width: 4%;
  
   
}
</style>

<template>

	  <div id="page-wrap">

		<div id="left">
      <table border="0" width="100%" cellspacing="5" class="tables">
        <tr>
          <td class="overlap">Report</td>
          <td>
            <select class="w-full selectp">
            <option value=""></option>
          </select>
          </td>
        </tr>
        <tr>
          <td class="overlap">Product</td>
          <td>
            <select class="w-full selectp">
            <option value=""></option>
          </select>
          </td>
          </tr>
          <tr>
          <td class="overlap">   </td>
          <td>
            <select class="w-full selectp">
            <option value=""></option>
          </select>
          </td>
          </tr>


      </table>
    </div>
    <br>

    
	<div id="page-wrap">

		<div id="left">
      <table border="0" width="100%" cellspacing="5" class="tables">
        <tr>
          <td class="overlap">From</td>
         <td><vs-input class="w-full" size="small" v-model="input1" /></td>
        </tr>

        <tr>
          <td class="overlap">Upto</td>
         <td><vs-input class="w-full" size="small" v-model="input1" /></td>
         </tr>

          <tr>
          <td class="overlap">Page*</td>
         <td><vs-input class="w-full" size="small" v-model="input1" /></td>
         </tr>

          <tr>
          <td class="overlap">SrNo.</td>
          <td><vs-input class="w-full" size="small" v-model="input1" /></td>
          </tr>
          


      </table>
    </div>

    <div >
        <br>

      <div class="right" align=":left">
        <br>
        <table border="0" width="100%" align=":left">
        <tr>
        <td align=""><vs-button  color="primary" type="filled">Exit</vs-button></td>
      
        <td><vs-button  color="primary" type="filled" style="!">Print</vs-button></td>
      
        <td><vs-button  color="primary" type="filled">Export</vs-button></td>
      
</div>
</div>


</template>