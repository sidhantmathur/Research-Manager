<template>
  <div id="new-participant">
    <h3>New Participant</h3>
    <form @submit.prevent="saveParticipant">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Participant ID #</span>
        </div>
        <input type="text" v-model="id" class="form-control" placeholder="001" required>
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Name</span>
        </div>
        <input type="text" v-model="name" class="form-control" placeholder="John Doe">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Email</span>
        </div>
        <input type="text" v-model="email" class="form-control" placeholder="useremail@email.com">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Phone Number</span>
        </div>
        <input type="text" v-model="phone" class="form-control" placeholder="999-999-9999">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Screen Date</span>
        </div>
        <input type="text" v-model="screen" class="form-control" placeholder="01/15/18">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Eligibility</span>
        </div>
        <input type="text" v-model="elig" class="form-control" placeholder="Not Eligible">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Details</span>
        </div>
        <input type="text" v-model="detail" class="form-control" placeholder="Patient is busy">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Appointment 1</span>
        </div>
        <input type="text" v-model="app1" class="form-control" placeholder="01/15/18">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Appointment 2</span>
        </div>
        <input type="text" v-model="app2" class="form-control" placeholder="01/15/18">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Appointment 3</span>
        </div>
        <input type="text" v-model="app3" class="form-control" placeholder="01/15/18">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">Notes</span>
        </div>
        <input type="text" v-model="notes" class="form-control" placeholder="Further notes">
      </div>


      <button type="submit" class="btn btn-info">Submit</button>
      <router-link to="/" class="btn btn-secondary">Cancel</router-link>
    </form>
  </div>
</template>

<script>
  import db from './firebaseInit'
  export default {
    name: 'new-participant',
    data() {
      return {
        id: null,
        name: null,
        elig: null,
        email: null,
        detail: null,
        phone: null,
        screen: null,
        app1: null,
        app2: null,
        app3: null,
        notes: null,
      }
    },
    methods: {
      saveParticipant() {
        db.collection('study1').add({
            id: this.id,
            name: this.name,
            elig: this.elig,
            email: this.email,
            detail: this.detail,
            phone: this.phone,
            screen: this.screen,
            app1: this.app1,
            app2: this.app2,
            app3: this.app3,
            notes: this.notes,
          })
          .then(docRef => this.$router.push('/'))
          .catch(error => console.log(err))
      }
    }
  }

</script>
