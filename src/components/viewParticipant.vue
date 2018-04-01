<template>
  <div id="view-participant">
      <ul class="list-group">
        <li class="list-group-item"><h4>{{name}}</h4></li>
        <li class="list-group-item"><strong>ID #:</strong> {{id}}</li>
        <li class="list-group-item"><strong>Email:</strong> {{email}}</li>
        <li class="list-group-item"><strong>Phone Number:</strong> {{phone}}</li>
        <li class="list-group-item"><strong>Screen Date:</strong> {{screen}}</li>
        <li class="list-group-item"><strong>Eligibility:</strong> {{elig}}</li>
        <li class="list-group-item"><strong>Details:</strong> {{detail}}</li>
        <li class="list-group-item"><strong>Appointment 1:</strong> {{app1}}</li>
        <li class="list-group-item"><strong>Appointment 2:</strong> {{app2}}</li>
        <li class="list-group-item"><strong>Appointment 3:</strong> {{app3}}</li>
        <li class="list-group-item"><strong>Notes:</strong> {{notes}}</li>
      </ul>
      <br>
      <router-link to="/" class="btn btn-link">Back</router-link>
      <button @click="deleteParticipant" class="btn btn-danger">Delete <i class="fa fa-trash"></i></button>
      <router-link v-bind:to="{name: 'edit-participant', params: {id: id}}" class="btn btn-info">
        Edit 
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'view-participant',
  data () {
      return {
          id: null,
          name: null,
          elig: null,
          detail: null,
          email: null,
          phone: null,
          screen: null,
          app1: null,
          app2: null,
          app3: null,
          notes: null,
      }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('study1').where('id', '==', to.params.id).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.participant= doc.id
            vm.id= doc.data().id
            vm.name= doc.data().name
            vm.elig= doc.data().elig
            vm.detail= doc.data().detail
            vm.email= doc.data().email
            vm.phone= doc.data().phone
            vm.screen= doc.data().screen
            vm.app1= doc.data().app1
            vm.app2= doc.data().app2
            vm.app3= doc.data().app3
            vm.notes= doc.data().notes
          })
        })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      db.collection('participants').where
        ('id', '==', this.$route.params.id).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.participant= doc.id
              this.id= doc.data().id
              this.name= doc.data().name
              this.elig= doc.data().elig
              this.detail= doc.data().detail
              this.email= doc.data().email
              this.phone= doc.data().phone
              this.screen= doc.data().screen
              this.app1= doc.data().app1
              this.app2= doc.data().app2
              this.app3= doc.data().app3
              this.notes= doc.data().notes
            })
          })
    },
    deleteParticipant() {
      if(confirm("Are you sure?")) {
        db.collection('study1').where
        ('id', '==', this.$route.params.id).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
             doc.ref.delete();
             this.$router.push('/')
            })
          })
      }
    }
  }
}
</script>
