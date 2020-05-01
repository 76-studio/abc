<style>
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;  
}
 #customers th {
  border: 1px solid #ddd; 
}
#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #7367f0;
  color: white;
}
.select-large input.vs-select--input {
    padding: 5px;
}
</style>

     <!--Mini CSS used , {{now}}, {{currentday}} variable is used to get current date-->

<template>

    <div class="vx-card p-6" style="" >
     <!--UPDATE START-->
      <table width="100%" border="0" class="tables">
     <tr>
      <td width="25%">  
      </td>
       <td width="50%"><center><h1 class="text-primary">Stock summary<br/><h4><font color="grey">View</font></h4></h1></center></td>
       <td width="25%"  align="right">Today {{now}}<br/> {{currentday}}            
        </td>
      </tr>
        <br/>
      </table>    
      
 <div class="vx-row mb-3">
        <div class="vx-col sm:w-1/6 " >
          <span> from date</span>
        </div>
            <!--Used for date picking -->
        <div class="vx-col sm:w-1/6 w-full">
           <flat-pickr  v-model="date" size="small" style="width:100px; height:24px;"  placeholder="choose Date" />
        </div>
        <tr>
          <td class="overlap">Calculation &nbsp;</td>
          <td>
          <vs-select v-model="city" class="w-full select-large">
          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
           </vs-select>
          </td>
        </tr>
      </div>

      <div class="vx-row mb-3">
        <div class="vx-col sm:w-1/6 " >
          <span>upto Date</span>
        </div>
        <div class="vx-col sm:w-1/5">
           <vs-input v-model="vno" size="small" style="width:100px; height:24px;" placeholder="" />
        </div>
        &nbsp;
        <tr>
           <td class="overlap">Filter &nbsp; &nbsp;</td>
          <td>
          <vs-select v-model="city" class="w-full select-large">
            &nbsp;
          <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
           </vs-select>
          </td>
        </tr>
        </div>
         <div class="vx-row mb-3">
        <div class="vx-col sm:w-1/6 " >
          <span>Group</span>
        </div>
        <div class="vx-col sm:w-1/5">
           <vs-input v-model="vno" size="small" style="width:100px; height:24px;" placeholder="" />
        </div>
        
        <div class="vx-row mb-3">
        <div class="vx-col sm:w-1/6 " >
          <span>Order by &nbsp; &nbsp; &nbsp;</span>
        </div>
        <div class="vx-col sm:w-1/5">
           <vs-input v-model="vno" size="small" style="width:180px; height:24px;" placeholder="A/c name" />
        </div>
        </div>
        </div>

<br/>






<br/>
   <!--Table start here -->
<div  style="overflow-x:auto;">  
<table id="customers" >
  <tr >
    <th class="bg-primary">Account name</th>
    <th class="bg-primary">op.</th>
    <th class="bg-primary">opening</th>
    <th class="bg-primary">Rec.</th>
    <th class="bg-primary">Rec.qty</th>
     <th class="bg-primary">Issue</th>
       <th class="bg-primary">Issue qty</th>
         <th class="bg-primary">cls.</th>
         <th class="bg-primary">closing</th>
           <th class="bg-primary">values</th>  
            <th class="bg-primary">Delete</th>  

  </tr>
      <!--cashvouchars is a variables use for FOR LOOP, Vue.js function are used to perform action like add/delete row and sow notifications -->
      <!--Any Numeric Input validation and input will show right hand (dir="rtl"),(@keypress="onlyNumber") use for int val-->

<tr v-for="(cashVaucher, k) in cashVauchers" :key="k">  
    <td scope="row">
        <vs-input class="w-full" size="small" v-model="cashVaucher.accountno" v-on:keyup.enter="addNewRowEnterkey(k,cashVaucher)" />
    </td>
    <td>
      <vs-input class="w-full" size="small"  v-model="cashVaucher.narration" v-on:keyup.enter="addNewRowEnterkey(k,cashVaucher)" />
    </td>
    <td>
      <vs-input class="w-full"  size="small" v-model="cashVaucher.payment" @change="totaladd(cashVaucher)" dir="rtl"  @keypress="onlyNumber" v-on:keyup.enter="addNewRowEnterkey(k,cashVaucher)"/>
    </td>
    <td><vs-input class="w-full" size="small" v-model="cashVaucher.receipt" v-on:keyup.enter="addNewRowEnterkey(k,cashVaucher)"/></td>
    <td><vs-input class="w-full" size="small" v-model="cashVaucher.discount" @change="totaladd(cashVaucher)" dir="rtl" @keypress="onlyNumber" v-on:keyup.enter="addNewRowEnterkey(k,cashVaucher)"/></td>
    <td><vs-input class="w-full" size="small" v-model="cashVaucher.receipt" v-on:keyup.enter="addNewRowEnterkey(k,cashVaucher)"/></td>
    <td><vs-input class="w-full" size="small" v-model="cashVaucher.receipt" v-on:keyup.enter="addNewRowEnterkey(k,cashVaucher)"/></td>
    <td><vs-input class="w-full" size="small" v-model="cashVaucher.receipt" v-on:keyup.enter="addNewRowEnterkey(k,cashVaucher)"/></td>
  
    
    <td><vs-input class="w-full" size="small" v-model="cashVaucher.receipt" v-on:keyup.enter="addNewRowEnterkey(k,cashVaucher)"/></td><td><vs-input class="w-full" size="small" v-model="cashVaucher.receipt" v-on:keyup.enter="addNewRowEnterkey(k,cashVaucher)"/></td> <td align="center"><vs-button size="small" icon-pack="feather" icon="icon-trash" color="danger" style="margin:3px;"  @click="deleteRow(k, cashVaucher)"></vs-button></td>
  </tr>
  </table>
  
</div>
  <br/>
    <div id="example">
      <vs-button class="button" size="small" @click="addNewRow();addNotify()" ><i class="fa fa-plus"></i></vs-button>
     &nbsp;
      <vs-button class="button" size="small"  @click="pop"><i class="fa fa-minus"></i></vs-button>
          &nbsp;
        <vs-button class="button" size="small" @click="saveInvoice">show all data</vs-button>
    </div> <i class="far fa-trash-alt" @click="deleteRow(k, cashVaucher)"></i>
<br/>

<div style="overflow-x:auto;"  width="100%">  
      <table  border="0" width="100%">
        <tr>
          <td class="hiden" width="13%"></td>
          <td  width="33%"></td>
          <td width="8%" align="left" ><b class="text-primary">₹</b> 0.00 </td>
          <td class="hiden" width="6%"></td>
          <td>
            <vs-input class="w-full" size="small"  v-model="totalcount" />
          </td>
          <td><vs-input class="w-full" size="small" v-model="input1" /></td>
          <td><vs-input class="w-full" size="small" v-model="input1" /></td>
        </tr> 
      </table>
    </div>

  <tr>
             <td width="33%" align="left" class="overlap">Search</td>
          <td width="33%" align="left"><vs-input class="w-full" size="small" v-model="input1" /></td>
          <td width="33%"></td>
            </tr>
          
<br>
       <tr>
             <td width="33%" align="left" class="overlap">A/c code</td>
          <td width="33%" align="left"><vs-input class="w-full" size="small" v-model="input1" /></td>
          <td width="33%"></td>
            </tr>
           <div align="right" style="padding-top: 10px">
        <br>
      <div class="right"  align="right" style="display: inline-block;">
        <br>
           <vs-button class="button"  @click="submit"  title="Print"
          icon-pack="feather"
          icon="icon-printer"  style="display: inline-block;"/>
         &nbsp;
         <vs-button class="button"  icon-pack="feather" title="Export"
          icon="icon-file-text" @click="submit"  style="display: inline-block;"/>
          &nbsp;
         <vs-button class="button"  icon-pack="feather" title="Edit"
          icon="icon-edit" @click="submit"  style="display: inline-block;"/>
         &nbsp;
         <vs-button class="button"  icon-pack="feather" title="Refresh"
          icon="icon-refresh-cw" @click="submit"  style="display: inline-block;"/>
         
          &nbsp;
         <vs-button class="button"  icon-pack="feather" title="Exit"
          icon="icon-x" @click="submit"  style="display: inline-block;"/>
         
         
         
         
      </div>
    </div>      

</div>

    
</template>

 <!--Script Start here all the action like @click and all method written above are define in this script, please useunique key value -->

<script>
import  flatPickr  from 'vue-flatpickr-component';
import  'flatpickr/dist/flatpickr.css';
export default {
  data() {
        return {
            date:null,
            totalcount:0,
            cashVauchers: [{
            accountname: '',
                op: '',
                Rec: '',
                opening: '',
                recqty: '',
                issue: '',
                issueqty: '',
                cls: '',
                closing: '',
                values: '',
            }]
        } 
    },
    components:{
      flatPickr
    },
    methods:{
          addNewRow(){
              this.cashVauchers.push({
                accountname: '',
                op: '',
                Rec: '',
                opening: '',
                recqty: '',
                issue: '',
                issueqty: '',
                cls: '',
                closing: '',
                values: '',
            });
          },
         addNewRowEnterkey(index, cashVaucher) {
               var idx = this.cashVauchers.indexOf(cashVaucher);
                 var len = this.cashVauchers.length;
            console.log(idx,index);
            if (len-1==index) {
                this.cashVauchers.push({
                accountname: '',
                op: '',
                Rec: '',
                opening: '',
                recqty: '',
                issue: '',
                issueqty: '',
                cls: '',
                closing: '',
                values: '',
                });
                     this.addNotify();
            }
        },
        deleteNotify(){
            this.$vs.notify({
              text: 'Row is deleted',
              color: "danger",
              iconPack: 'feather',
              icon:'icon-trash'
             })
      },
       addNotify(){
            this.$vs.notify({
              text: 'Row is Added',
              color: "primary",
              iconPack: 'feather',
              icon:'icon-plus'
             })
      },
        deleteRow(index, cashVaucher) {
            var idx = this.cashVauchers.indexOf(cashVaucher);
            console.log(idx, index);
            if (idx > -1) {
                this.cashVauchers.splice(idx, 1);
            }
            this.deleteNotify();
        },
        pop(){
           this.cashVauchers.pop({
               accountname: '',
                op: '',
                Rec: '',
                opening: '',
                recqty: '',
                issue: '',
                issueqty: '',
                cls: '',
                closing: '',
                values: '',
            });
            this.deleteNotify();
        },
         saveInvoice() {
            alert(JSON.stringify(this.cashVauchers));
        },
        totaladd(cashVaucher){
             var total = parseFloat(cashVaucher.payment) * parseFloat(cashVaucher.discount);
           this.totalcount=total;
            this.calculateTotal(); 
        },  
          deletec(){
              this.cashVauchers.pop({
                accountname: '',
                op: '',
                Rec: '',
                opening: '',
                recqty: '',
                issue: '',
                issueqty: '',
                cls: '',
                closing: '',
                values: '',
            });
          },
         onlyNumber($event) {    
                let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
                if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
                  return   $event.preventDefault();
                }
                else return null;           
          }
    },
    created() {
      for(var i=0;i<4;i++){
         this.addNewRow();
      }
    },
    computed: {
        now: function () {  
          var today = new Date();
          var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
          return date;
        },
        currentday: function(){
           var today = new Date();
           var weekday=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            var  currenday = weekday[today.getDay()];
            return currenday;
        }
    }
}
</script>