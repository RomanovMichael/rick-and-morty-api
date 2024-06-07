<script setup></script>

<template>
  <div class="app-card">
    <div class="app-card__image">
      <div class="app-card__image-thumb">
        <picture>
          <img src="https://rickandmortyapi.com/api/character/avatar/84.jpeg" alt="char">
        </picture>
      </div>
    </div>
    <div class="app-card__content">
      <div class="app-card__heading">
        <h2 class="app-card__title">Cult Leader Morty</h2>
        <div class="app-card__status"><span>Alive - Human</span></div>
      </div>
      <div class="app-card__location app-card__location--last">
        <span class="app-card__location-caption">Last known location:</span>
        <span class="app-card__location-value">Hideout Planet</span>
      </div>
      <div class="app-card__location app-card__location--first">
        <span class="app-card__location-caption">First seen in:</span>
        <span class="app-card__location-value">Rattlestar Ricklactica</span>
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

.app-card__status span {
  color: var(--color-white);
  font-size: 1rem;
  line-height: 1.6rem;
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

