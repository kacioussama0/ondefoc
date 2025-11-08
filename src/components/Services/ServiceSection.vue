<script>

import SectionTitle from "@/components/SectionTitle.vue";
import ServiceCard from "@/components/Services/ServiceCard.vue";

export default {
  name: "ServiceSection",
  components: {ServiceCard, SectionTitle},
  data() {
    return {

      "services": [
      {
        "name_fr": "Formation Continue",
        "name_ar": "التكوين المتواصل",
        "description_fr": "Programmes destinés à renforcer les compétences des travailleurs et à améliorer leur adaptation aux évolutions professionnelles.",
        "description_ar": "برامج تهدف إلى تعزيز مهارات العمال وتحسين قدرتهم على التكيف مع التطورات المهنية.",
        "imageUrl": "src/assets/images/services/formation-continue.JPG"
      },
      {
        "name_fr": "Formation Statutaire",
        "name_ar": "التكوين الإجباري",
        "description_fr": "Formations réglementaires prévues par les statuts professionnels pour la titularisation et la promotion des agents.",
        "description_ar": "تكوينات قانونية تفرضها الأنظمة المهنية من أجل الترسيم أو الترقية في المناصب.",
        "imageUrl": "src/assets/images/services/formation-statut.JPG"
      },
      {
        "name_fr": "Formation à la Carte",
        "name_ar": "التكوين حسب الطلب",
        "description_fr": "Conception et mise en œuvre de formations personnalisées adaptées aux besoins spécifiques des entreprises.",
        "description_ar": "تصميم وتنفيذ تكوينات مخصصة تتناسب مع احتياجات المؤسسات الخاصة والعامة.",
        "imageUrl": "src/assets/images/services/formation-carte.JPG"
      },
      {
        "name_fr": "Brevet Professionnel de Conduite",
        "name_ar": "شهادة الكفاءة المهنية للسياقة",
        "description_fr": "Préparation et délivrance du brevet professionnel de conduite pour les conducteurs de véhicules de transport.",
        "description_ar": "تكوين وتحضير شهادة الكفاءة المهنية للسياقة الخاصة بسائقي مركبات النقل.",
        "imageUrl": "src/assets/images/services/conduite.JPG"
      },
      {
        "name_fr": "Validation des Compétences Acquises par l’Expérience (VCAE)",
        "name_ar": "إثبات الكفاءات المكتسبة من الخبرة المهنية",
        "description_fr": "Dispositif permettant de reconnaître officiellement les compétences acquises à travers l’expérience professionnelle.",
        "description_ar": "آلية للاعتراف الرسمي بالكفاءات التي تم اكتسابها من خلال الخبرة المهنية دون الحاجة إلى تكوين أولي.",
        "imageUrl": "src/assets/images/services/vcae.JPG"
      },
      {
        "name_fr": "Études",
        "name_ar": "الدراسات",
        "description_fr": "Réalisation d’études techniques et pédagogiques pour la planification et l’évaluation des dispositifs de formation.",
        "description_ar": "إجراء دراسات تقنية وبيداغوجية للتخطيط وتقييم برامج التكوين.",
        "imageUrl": "src/assets/images/services/etudes.JPG"
      },
      {
        "name_fr": "Assistance",
        "name_ar": "المساعدة",
        "description_fr": "Accompagnement technique et administratif des partenaires dans la mise en œuvre de leurs projets de formation.",
        "description_ar": "مرافقة تقنية وإدارية للشركاء في تنفيذ مشاريعهم التكوينية.",
        "imageUrl": "src/assets/images/services/assistance.JPG"
      },
      {
        "name_fr": "Conseil",
        "name_ar": "الاستشارة",
        "description_fr": "Fourniture de conseils et d’expertises pour améliorer la gestion et la performance des programmes de formation.",
        "description_ar": "تقديم الاستشارات والخبرات لتحسين تسيير وأداء برامج التكوين.",
        "imageUrl": "src/assets/images/services/conseil.JPG"
      },
      {
        "name_fr": "Séminaires",
        "name_ar": "الندوات",
        "description_fr": "Organisation de séminaires et journées d’étude favorisant le partage des expériences et la diffusion des bonnes pratiques.",
        "description_ar": "تنظيم ندوات وأيام دراسية تهدف إلى تبادل الخبرات ونشر أفضل الممارسات المهنية.",
        "imageUrl": "src/assets/images/services/seminaire.JPG"
      }
    ]
    }
  }

}
</script>

<template>


  <section class="services section-padding-02 mt-n6 pb-5">
    <div class="container">

      <section-title main-title="Services"  />

  <div class="about-items-wrapper">
    <div class="row gy-4">

      <div class="col-md-6 col-lg-4" v-for="(service,index) in services">
        <service-card
          :title="this.$i18n.locale == 'ar' ? service.name_ar : service.name_fr"
          :description = "this.$i18n.locale == 'ar' ? service.description_ar : service.description_fr"
          :image-url="service.imageUrl"
        />
      </div>

    </div>

  </div>
    </div>

  </section>


</template>

<style >


.services {
  background-color: #2b1020;

}

.services .section-title .sub-title {
  color: #FFFFFF !important;
}

.services .section-title .main-title {
  color: #FFFFFF !important;
}

</style>