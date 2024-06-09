<script setup>
import { computed } from 'vue'
import { useCharactersStore } from '@/stores/characters'

const charactersStore = useCharactersStore()

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const statusColor = computed(() => {
  const flag = props.item.status.toLowerCase()
  
  const colorKit = {
    alive: 'rgb(85, 204, 68)',
    dead : 'rgb(214, 61, 46)',
    unknown: 'rgb(255, 255, 255)'
  }

  return colorKit[flag] || colorKit.unknown
})

const firstSeenEpisode = computed(()=> {
  const itemEpisodes = props.item?.episode
  const firstEpisodeUrl = itemEpisodes[0]

  const episode = charactersStore.episodes.find(el => el.url === firstEpisodeUrl )
  return episode?.name
}) 
</script>

<template>
  <div v-if="item" class="app-card">
    <div class="app-card__image">
      <div class="app-card__image-thumb">
        <picture>
          <img :src="props.item.image" :alt="props.item.name">
        </picture>
      </div>
    </div>
    <div class="app-card__content">
      <div class="app-card__heading">
        <h2 v-if="props.item.name" class="app-card__title">{{props.item.name}}</h2>
        <div class="app-card__status">
          <span :style="{'backgroundColor': statusColor}" class="add-card__status-icon"></span>
          <span>{{ props.item.status }} - {{ props.item.species }}</span>
        </div>
      </div>
      <div v-if="props.item.location.name" class="app-card__location app-card__location--last">
        <span class="app-card__location-caption">Last known location:</span>
        <span class="app-card__location-value">{{ props.item.location.name }}</span>
      </div>
      <div v-if="firstSeenEpisode" class="app-card__location app-card__location--first">
        <span class="app-card__location-caption">First seen in:</span>
        <span class="app-card__location-value">{{ firstSeenEpisode }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.app-card {
  border-radius: 9px;
  min-height: 50px;
  display: flex;
  align-items: stretch;
  flex-wrap: nowrap;
  background-color: var(--color-gray);
  box-shadow: var(--color-shadow);
  overflow: hidden;
}

.app-card__image {
  position: relative;
  width: 14.3125rem;
}

.app-card__image-thumb {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 96.06986899563319%;
}

.app-card__image-thumb img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.app-card__content {
  flex: 1;
  padding: .875rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.app-card__title {
  color: var(--color-white);
  font-weight: 800;
  font-size: 1.75rem;
}

.app-card__status {
  display: flex;
  align-items: center;
}

.app-card__status span {
  display: block;
  color: var(--color-white);
  font-size: 1rem;
  line-height: 1.6rem;
}

.add-card__status-icon {
  border-radius: 50%;
  width: .6rem;
  height: .6rem;
  background-color: red;
  margin-right: .325rem;
}

.app-card__locations {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-top: 2rem;
}

.app-card__location-caption {
  display: block;
  color: var(--color-caption);
  line-height: 1.6rem;
}

.app-card__location-value {
  display: block;
  color: var(--color-white);
  font-size: 1.125rem;
  line-height: 1.875rem;
}
</style>

