import { SpecificationRepository } from "../../repositories/implemetations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";


const specificationsRepository = new SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };
