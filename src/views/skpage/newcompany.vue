<template>
  <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit" @on-complete="formSubmitted">
      <tab-content title="Step 1" class="mb-5">

          <!-- tab 1 content -->
          <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full mt-5">
                  <vs-input label="First Name" v-model="firstName" class="w-full" />
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                  <vs-input label="Last Name"  v-model="lastName" class="w-full" />
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                  <vs-input type="email" label="Email"  v-model="email" class="w-full" />
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                  <vs-select v-model="city" class="w-full select-large" label="City">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                  </vs-select>
              </div>
          </div>
      </tab-content>

      <!-- tab 2 content -->
      <tab-content title="Step 2" class="mb-5">
          <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full">
                  <vs-input label="Proposal Title" v-model="proposalTitle" class="w-full mt-4" />
                  <vs-input label="Job Title"  v-model="jobTitle" class="w-full mt-4" />
              </div>
              <div class="vx-col md:w-1/2 w-full">
                  <vs-textarea v-model="textarea" label="Short discription" class="mb-0 md:mt-10 mt-6" rows="3" />
              </div>
          </div>
      </tab-content>

      <!-- tab 3 content -->
      <tab-content title="Step 3" class="mb-5">
          <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full">
                  <vs-input label="Event Name" v-model="eventName" class="w-full mt-5" />
              </div>
              <div class="vx-col md:w-1/2 w-full">
                  <vs-select v-model="city" class="w-full select-large mt-5" label="Event Location">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in cityOptions" class="w-full" />
                  </vs-select>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                  <vs-select v-model="status" class="w-full select-large" label="Event Status">
                      <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in statusOptions" class="w-full" />
                  </vs-select>
              </div>
              <div class="vx-col md:w-1/2 w-full md:mt-8">
                  <div class="demo-alignment">
                      <span>Requirements:</span>
                      <div class="flex">
                        <vs-checkbox>Staffing</vs-checkbox>
                        <vs-checkbox>Catering</vs-checkbox>
                      </div>
                  </div>
              </div>
          </div>
      </tab-content>
  </form-wizard>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      city: "new-york",
      proposalTitle: "",
      jobTitle: "",
      textarea: "",
      eventName: "",
      eventLocation: "san-francisco",
      status: "plannning",
      cityOptions: [
        {text: "New York", value:"new-york"},
        {text: "Chicago", value:"chicago"},
        {text: "San Francisco", value:"san-francisco"},
        {text: "Boston", value:"boston"},
      ],
      statusOptions: [
        {text: "Plannning", value:"plannning"},
        {text: "In Progress", value:"in progress"},
        {text: "Finished", value:"finished"},
      ],
      LocationOptions: [
        {text: "New York", value:"new-york"},
        {text: "Chicago", value:"chicago"},
        {text: "San Francisco", value:"san-francisco"},
        {text: "Boston", value:"boston"},
      ],
    }
  },
  methods: {
    formSubmitted() {
      alert("Form submitted!");
    }
  },
  components: {
    FormWizard,
    TabContent
  }
}
</script>
        