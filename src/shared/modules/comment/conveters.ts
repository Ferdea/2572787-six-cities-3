import { DocumentType } from '@typegoose/typegoose';
import { CommentEntity } from './comment.entity.js';
import { Comment } from '../../models/index.js';
import { UserEntity } from '../user/user.entity.js';
import { toFullModel as toFullUserModel } from '../user/conventers.js';

export function toFullModel(dbModel: DocumentType<CommentEntity>, userModel: DocumentType<UserEntity>, host: string): Comment {
  return {
    id: dbModel.id.toString(),
    text: dbModel.text,
    createdAt: dbModel.createdAt!,
    rating: dbModel.rating,
    author: toFullUserModel(userModel, host)
  };
}
