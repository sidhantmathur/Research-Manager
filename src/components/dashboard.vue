<template>
  <div id="dashboard">
    <h3>Research Information</h3>
      <p>
        This is an app built with Vue and Firebase. 
      </p>
      <p>
        You can put important information here!
      </p>
    <h3>Participant List</h3>
    <div class="list-group">
        <router-link v-for="participant in study1" v-bind:key="participant.id" v-bind:to="{name: 'view-participant', params: {id: participant.id}}" class="list-group-item list-group-item-action">
              <div class="badge badge-secondary">{{participant.elig}}</div>
              {{participant.id}}: {{participant.name}}
        </router-link>
    </div>
    <br>
    <div class="fixed-action-btn">
      <router-link to="/new" class="btn btn-info">
        New Participant 
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'dashboard',
  data () {
      return {
          study1: []
      }
  },
  created () {
    db.collection('study1').orderBy('id').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'participant': doc.id,
          'id': doc.data().id,
          'name': doc.data().name,
          'elig': doc.data().elig,
          'detail': doc.data().detail,
          'email': doc.data().email,
          'phone': doc.data().phone,
          'screen': doc.data().screen,
          'app1': doc.data().app1,
          'app2': doc.data().app2,
          'app3': doc.data().app3,
          'notes': doc.data().notes
        }
        this.study1.push(data)
      })
    })
  }
}
</script>
