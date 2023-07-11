<template>
    <div class="gallery d-flex flex-wrap">
        <ImageLoader
            v-for="(image, imageIndex) in imageUrls"
            :key="imageIndex"
            :src="image"
            :maxWidth="150"
            :style="{ zIndex: imageUrls.length - imageIndex, marginRight: '-15px' }"
        />
    </div>

    <span v-if="hasNoImages" class="break-words">&mdash;</span>

    <p v-if="shouldShowToolbar" class="flex items-center text-sm mt-3">
        <a
            v-if="field.downloadable"
            :dusk="field.attribute + '-download-link'"
            @keydown.enter.prevent="download"
            @click.prevent="download"
            tabindex="0"
            class="cursor-pointer text-gray-500 inline-flex items-center"
        >
            <Icon
                class="mr-2"
                type="download"
                view-box="0 0 24 24"
                width="16"
                height="16"
            />
            <span class="class mt-1">{{ __('Download') }}</span>
        </a>
    </p>
</template>

<style>
.gallery {
    display: flex;
}

.gallery img {
    border: 2px solid #ffffff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    object-fit: cover;
    margin-right: -15px;
    position: relative;
    z-index: 1;
    transition: transform 0.3s;
}

.gallery img:last-child {
    margin-right: 0;
}

.gallery img:hover {
    transform: scale(1.1);
    z-index: 2;
}
@media only screen and (max-width: 764px) {
    .gallery span:not(:first-child) {
        display: none;
    }
}
</style>

<script>
import {FieldValue} from 'laravel-nova';

export default {
    mixins: [FieldValue],

    props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],

    data() {
        return {
            domain: null
        };
    },

    mounted() {
        this.getFullDomainWithProtocol();
    },

    methods: {
        /**
         * Download the linked file
         */
        download() {
            const {resourceName, resourceId} = this;
            const attribute = this.field.attribute;

            let link = document.createElement('a');
            link.href = `/nova-api/${resourceName}/${resourceId}/download/${attribute}`;
            link.download = 'download';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },

        getFullDomainWithProtocol() {
            const protocol = window.location.protocol;
            const hostname = window.location.hostname;
            const port = window.location.port ? ':' + window.location.port : '';

            this.domain = `${protocol}//${hostname}${port}`;
        },
    },

    computed: {
        imageUrls() {
            if (!this.field.value) {
                return [];
            }

            return JSON.parse(this.field.value);
        },

        hasNoImages() {
            return this.imageUrls.length === 0;
        },

        shouldShowToolbar() {
            return Boolean(this.field.downloadable && !this.hasNoImages);
        },
    },
};
</script>
